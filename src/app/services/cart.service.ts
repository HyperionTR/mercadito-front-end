import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartStatus = new BehaviorSubject<boolean>(false);
  private cartProducts = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Método para obtener el observable del estado de inicio de sesión
  cartStatus$(): Observable<boolean> {
    return this.cartStatus.asObservable();
  }

  // Método para obtener el observable del usuario actual
  cartProducts$(): Observable<any> {
    return this.cartProducts.asObservable();
  }

  // Método para establecer el estado de inicio de sesión
  setCartStatus(value: boolean) {
    this.cartStatus.next(value);
  }

  setCartProducts(products: any[]) {
    this.cartProducts.next(products);
  }

  getCartProducts() {
    return this.cartProducts.asObservable();
  }
}
