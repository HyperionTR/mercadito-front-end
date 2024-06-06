import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { DeliveryPage } from '../delivery/delivery.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartProducts: any[] = [];
  total: number = 0;
  cartSubscription!: Subscription;

  constructor(private cartService: CartService, private modalController: ModalController) {}

  ngOnInit() {
    this.loadCartProducts();
    this.cartSubscription = this.cartService.getCartProducts().subscribe(products => {
      this.cartProducts = products;
      this.calculateTotal();
    });
  }

  loadCartProducts() {
    const cartProducts = localStorage.getItem('cartProducts');
    if (cartProducts) {
      this.cartProducts = JSON.parse(cartProducts);
      this.cartService.setCartProducts(this.cartProducts); // Agrega esta línea
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.cartProducts.reduce((acc, product) => acc + product.precio, 0);
  }

  removeProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    this.calculateTotal();
    this.cartService.setCartProducts(this.cartProducts);
  }

  async openDeliveryPage() {
    const modal = await this.modalController.create({
      component: DeliveryPage,
      componentProps: {
        cartProducts: this.cartProducts // Pasa los productos del carrito al modal
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);
      }
    });

    return await modal.present();
  }
}
