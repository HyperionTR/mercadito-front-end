import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  protected product: Product = {
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

  constructor(
    private activatedRoute: ActivatedRoute, 
    protected apiService: ApiService, 
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.product.id_producto = params['id'];
      this.loadProductDetails(this.product.id_producto);
    });
  }

  loadProductDetails(productId: number) {
    this.apiService.productDetails(productId).subscribe(
      (response: any) => {
        if (response) {
          // Convertir el precio a número
          response.precio = parseFloat(response.precio);
          this.product = response;
          console.log(this.product);
        } else {
          console.error('API response was not successful');
        }
      },
      error => {
        console.error('Error fetching product details', error);
      }
    );
  }

  addProductCart(product: Product) {
    // Verificar si el producto tiene un id_producto
    if (!product.id_producto) {
      console.error('Product does not have an id_producto:', product);
      return;
    }

    console.log('Adding product to cart:', product);
    let cartProducts = localStorage.getItem('cartProducts');
    let products = cartProducts ? JSON.parse(cartProducts) : [];

    // Verificar si el producto ya existe en el carrito
    const productIndex = products.findIndex((p: any) => p.id_producto === product.id_producto);
    if (productIndex === -1) {
      products.push({ ...product, quantity: 1 });
    } else {
      products[productIndex].quantity += 1; // Si ya existe, incrementar la cantidad
    }

    localStorage.setItem('cartProducts', JSON.stringify(products));
    this.cartService.setCartProducts(products);
    this.cartService.setCartStatus(true);
    console.log('Updated cart products:', products);

    // Navegar al carrito
    this.router.navigate(['/tabs/cart']);
  }


}
