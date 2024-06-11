import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Order, Product } from '../../components/order-card/order-card.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  orders: Order[] = [];
  sales: Order[] = [];
  inventory: Product[] = [];
  currentSegment: string = 'compras';
  isSeller: boolean = false;
  currentUser = null;

  constructor(
    private modalController: ModalController,
    private apiService: ApiService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.currentUser$().subscribe(user => {
      if (user) {
        this.isSeller = user.tipo_de_usuario === 'vendedor';
        this.loadOrders();
        if (this.isSeller) {
          this.loadSales();
          this.loadInventory();
        }
      } else {
        this.isSeller = false;
        this.orders = [];
        this.sales = [];
        this.inventory = [];
      }
    });
    console.log('AccountPage initialized');
  }

  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
    // Cargar datos según el segmento seleccionado
    if (this.currentSegment === 'ventas') {
      this.loadSales();
    } else if (this.currentSegment === 'inventario') {
      this.loadInventory();
    } else {
      this.loadOrders();
    }
  }

  loadOrders() {
    this.apiService.getOrders().subscribe(
      (orders) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error al cargar los pedidos:', error);
      }
    );
  }

  loadSales() {
    this.apiService.getSales().subscribe(
      (sales) => {
        this.sales = sales;
      },
      (error) => {
        console.error('Error al cargar las ventas:', error);
      }
    );
  }

  loadInventory() {
    this.apiService.getInventory().subscribe(
      (inventory) => {
        this.inventory = inventory;
      },
      (error) => {
        console.error('Error al cargar el inventario:', error);
      }
    );
  }

  // Actualizar todo al momento de cambiar a esta página
  ionViewWillEnter() {
    this.authService.currentUser$().subscribe(user => {
      if (user) {
        this.isSeller = user.tipo_de_usuario === 'vendedor';
        console.log('ionView: isSeller:', this.isSeller);
        this.loadOrders();
        if (this.isSeller) {
          this.loadSales();
          this.loadInventory();
        }
      } else {
        this.isSeller = false;
        this.orders = [];
        this.sales = [];
        this.inventory = [];
      }
    });

    this.loadOrders();
    if (this.isSeller) {
      this.loadSales();
      this.loadInventory();
    }
  }

  async openEditProductModal(product?: Product) { // Parámetro opcional para el producto a editar
    const modal = await this.modalController.create({
      component: EditProductComponent,
      componentProps: { product } // Pasa el producto al modal si existe
    });

    modal.onDidDismiss().then(() => {
      this.loadInventory(); // Recarga el inventario después de cerrar el modal
    });

    return await modal.present();
  }

}
