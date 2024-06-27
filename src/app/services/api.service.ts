import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order } from '../interfaces/orders';
import { Product } from '../interfaces/products';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = environment.api;

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private router:Router
  ) { }

  private getHeaders(): HttpHeaders {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser && currentUser.token ? currentUser.token : ''; // Obtiene el token de localStorage

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Incluye el token en el encabezado Authorization
    });
  }

  login(username: string, password: string): Observable<any> {
    const url = this.api + '/login';
    const body = { boleta: username, password: password };
    return this.http.post(url, body, { observe: 'response', withCredentials: true }) // Observa la respuesta completa
      .pipe(
        map((response: HttpResponse<any>) => response.body),
        catchError(async error => {
          console.error('Error en el inicio de sesión:', error);

          // Muestra el mensaje de error en un toast
          const toast = await this.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
          toast.present()

          return throwError(() => new Error(error)); // Propaga el error para manejarlo en el componente
        })
      );
  }

  logout(): Observable<string> {
    const url = this.api + '/login'; // Endpoint de cierre de sesión
    return this.http.delete(url, { headers: this.getHeaders(), observe: 'response', responseType: 'text', withCredentials: true})
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  verifySession(): Observable<any> {
    const url = this.api + '/login/verify';
    return this.http.get(url, { withCredentials: true }) // withCredentials: true para enviar cookies
      .pipe(
        map((response: any) => response),
        catchError(error => {
          if (error.status === 401) {
            // Si no está autenticado, redirigir a la página de inicio de sesión
            this.router.navigate(['/login']); // Redirige al login en caso de error 401
            return of(null);
          } else {
            console.error('Error al verificar la sesión:', error);
            return throwError(() => new Error(error));
          }
        })
      );
  }

  products(): Observable<any>{
    const url = this.api + '/products/data';
    return this.http.get(url);
  }

  getProducts(page: number): Observable<any[]> { // Método para obtener productos sin búsqueda
    const params = new HttpParams().set('page', page.toString());
    const url = this.api + '/products/data';
    return this.http.get<any[]>(url, { params });
  }

  searchProducts(page: number, query: string): Observable<any[]> { // Método para buscar productos
    const params = new HttpParams().set('page', page.toString()).set('query', query);
    const url = this.api + '/products/search';
    return this.http.get<any[]>(url, { params });
  }

  
  productDetails(id: number): Observable<any>{
    const url = this.api + '/products/data/' + id;
    return this.http.get(url);
  }

  register(jsonData: any): Observable<string> {
    const url = this.api + '/verify/registration';
    return this.http.post(url, jsonData, { headers: this.getHeaders(), observe: 'response', responseType: 'text' }) // Incluye los encabezados
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  createOrder(orderData: any): Observable<string> {
    const url = this.api + '/pedidos';
    return this.http.post(url, orderData, { headers: this.getHeaders(), observe: 'response', responseType: 'text', withCredentials: true }) // Incluye los encabezados
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  getOrders(): Observable<Order[]> {
    const url = this.api + '/pedidos';
    return this.http.get<Order[]>(url, { withCredentials: true }); 
  }

  getSales(): Observable<Order[]> {
    const url = this.api + '/pedidos/sales';
    return this.http.get<Order[]>(url, { withCredentials: true });
  }

  getInventory(): Observable<any[]> {
    const url = this.api + '/products/seller/data';
    return this.http.get<Product[]>(url, { withCredentials: true });
  }

  updateOrderStatus(orderId: string, productId: number, newStatus: string): Observable<string> {
    const url = this.api + `/pedidos/${orderId}`; // URL con el ID del pedido
    const body = { estado: newStatus, id_producto: productId }; // Datos en formato JSON

    return this.http.patch(url, body, { headers: this.getHeaders(), observe: 'response', responseType: 'text', withCredentials: true })
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  updateProduct(productId: number, formData: FormData): Observable<any> {
    const url = this.api + `/products/seller/data/${productId}`;
    return this.http.patch(url, formData, { observe: 'response', responseType: 'text', withCredentials: true })
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  createProduct(formData: FormData): Observable<any> {
    const url = this.api + `/products/seller`;
    return this.http.post(url, formData, { observe: 'response', responseType: 'text', withCredentials: true })
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  deleteProduct(productId: number): Observable<any> {
    const url = this.api + `/products/seller/${productId}`;
    return this.http.delete(url, { headers: this.getHeaders(), observe: 'response', responseType: 'text', withCredentials: true})
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  updateProductAvailability(productId: number, availability: boolean): Observable<any> {
    const url = this.api + `/products/seller/avail/${productId}`;
    return this.http.patch(url, { disponibilidad: availability }, { headers: this.getHeaders(), observe: 'response', responseType: 'text', withCredentials: true})
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  getProductImage(image: string | null, placeholder: boolean): string {
    const backend_url = this.api + `/images/products/${image}`;
    const generic_url_seed ='https://picsum.photos/seed';
    const generic_url = 'https://picsum.photos/256'

    if (image && !placeholder) {
      return backend_url;
    } else if (placeholder) {
      return `${generic_url_seed}/${image}/256`;
    } else {
      return generic_url;
    }

  }


}