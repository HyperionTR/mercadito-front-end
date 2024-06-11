import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  @Input() cartProducts: any[] = []; // Recibe los productos del carrito

  selectedLocation: string = 'Palapas de gobierno'; // Valor por defecto
  otherLocation: string = '';

  constructor(
    private modalController: ModalController,
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  onLocationChange() {
    if (this.selectedLocation !== 'Otro') {
      this.otherLocation = ''; // Limpia el campo "Otro" si se selecciona otra opción
    }
  }

  async confirmDelivery() {
    const lugarEntrega = this.selectedLocation === 'Otro' ? this.otherLocation : this.selectedLocation;

    const orderData = {
      info: {
        lugar_entrega: lugarEntrega
      },
      detalles: this.cartProducts.map(product => ({
        boleta_vendedor: product.boleta_vendedor,
        id_producto: product.id_producto
      }))
    };

    this.apiService.createOrder(orderData).subscribe(
      async (response) => {
        console.log('Pedido creado:', response);
        const toast = await this.toastController.create({
          message: response,
          duration: 2000,
          position: 'top'
        });
        toast.present();
        this.modalController.dismiss(); // Cierra el modal después de crear el pedido
      },
      async (error: HttpErrorResponse) => {
        console.error('Error al crear el pedido:', error);
        
        if( error.status === 401) {
          this.router.navigate(['/login']);
        }

        const toast = await this.toastController.create({
          message: error.error,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    );

    // Usamos el servicio de carrito para limpiarlo
    this.cartService.clearCart();

  }

  closeModal() {
    this.modalController.dismiss();
  }
}
