import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EditProductComponent } from 'src/app/pages/account/edit-product/edit-product.component';
import { AccountPage } from 'src/app/pages/account/account.page';
import { Product } from 'src/app/interfaces/products';
import { Order, OrderDetails } from 'src/app/interfaces/orders';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: Order = {
    id_pedido: '',
    lugar_entrega: '',
    fecha_pedido: '',
    comprador: '',
    notas: '',
    detalles: []
  };
  @Input() isSellerView: boolean = false; // Indica si es la vista del vendedor
  @Input() isProduct: boolean = false; // Indica si es un producto
  @Input() isInventory: boolean = false; // Indica si es la vista de inventario 
  @Input() producto: Product = {
    nombre_de_usuario: '',
    boleta_vendedor: 0,
    id_producto: 0,
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: 0,
    disponibilidad: false,
    fecha_creacion: '',
    placeholder: false
  };

  showDetails: boolean = false;
  currentUser: any = null;

  constructor(
    private authService: AuthService,
    protected apiService: ApiService,
    private toastController: ToastController,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.authService.currentUser$().subscribe(user => {
      if ( user ) 
        this.currentUser = user;
    });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'pendiente': return 'warning';
      case 'aceptado': return 'success';
      case 'finalizado': return 'primary';
      case 'cancelado': return 'danger';
      default: return 'medium';
    }
  }

  async showMap() {
    // ... (lógica para mostrar el mapa en un modal)
  }

  updateOrderStatus(detail: OrderDetails, newStatus: string) {
    this.apiService.updateOrderStatus(this.order.id_pedido, detail.id_producto, newStatus).subscribe(
      async (response) => {
        detail.estado = newStatus; 
        const toast = await this.toastController.create({
          message: response,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      },
      async (error) => {
        console.error('Error al actualizar el estado del pedido:', error);
          let errorMessage = 'Error desconocido';

          if (error.status === 400) {
            errorMessage = 'Faltan datos en la solicitud';
          } else if (error.status === 409) {
            errorMessage = 'No se puede actualizar el estado del pedido';
          } else if (error.status === 500) {
            errorMessage = 'Error interno del servidor';
          }

          const toast = await this.toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'top'
          });
          toast.present();
      }
    );
  }

  getAvailableStatuses(currentStatus: string): string[] {
    switch (currentStatus) {
      case 'pendiente':
        return ['pendiente', 'aceptado', 'cancelado'];
      case 'aceptado':
        return ['aceptado', 'finalizado'];
      case 'cancelado':
      case 'finalizado':
        return [currentStatus]; // No se puede cambiar el estado
      default:
        return [];
    }
  }

  isStatusAllowed(currentStatus: string, newStatus: string): boolean {
    return this.getAvailableStatuses(currentStatus).includes(newStatus);
  }

  async openEditProductModal(product: Product) {
    const modal = await this.modalController.create({
      component: EditProductComponent,
      componentProps: { product } 
    });

    modal.onDidDismiss().then(() => {
      AccountPage.prototype.loadInventory();
    });

    return await modal.present();
  }

  async deleteProduct() {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.apiService.deleteProduct(this.producto.id_producto).subscribe(
              async (response) => {
                const toast = await this.toastController.create({
                  message: response,
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
                // Actualiza la lista de productos después de eliminar (puedes emitir un evento o recargar los datos)
                
              },
              async (error) => {
                // ... (manejo de errores)
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  async toggleAvailability() {
    const newAvailability = !this.producto.disponibilidad;

    this.apiService.updateProductAvailability(this.producto.id_producto, newAvailability).subscribe(
      async (response) => {
        this.producto.disponibilidad = newAvailability; // Actualiza la disponibilidad en el frontend

        const toast = await this.toastController.create({
          message: newAvailability ? 'El producto ahora es visible' : 'Has ocultado el producto',
          duration: 2000,
          position: 'top'
        });
        toast.present();
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: error.error,
          duration: 2000,
          position: 'top'
        });
      }
    );
  }
}

