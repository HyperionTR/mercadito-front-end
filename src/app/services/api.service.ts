import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular'; // Asegúrate de tener ToastController importado
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private toastController: ToastController, private router:Router) { }

  private getHeaders(): HttpHeaders {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser && currentUser.token ? currentUser.token : ''; // Obtiene el token de localStorage

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Incluye el token en el encabezado Authorization
    });
  }

  login(username: string, password: string): Observable<any> {
    const url = 'https://mercadito-app.azurewebsites.net/login';
    const body = { boleta: username, password: password };
    return this.http.post(url, body, { observe: 'response', withCredentials: true }) // withCredentials: true para enviar cookies
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
    const url = 'https://mercadito-app.azurewebsites.net/login'; // Endpoint de cierre de sesión
    return this.http.delete(url, { headers: this.getHeaders(), observe: 'response', responseType: 'text' })
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  verifySession(): Observable<any> {
    const url = 'https://mercadito-app.azurewebsites.net/login/verify';
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
    const url = 'https://mercadito-app.azurewebsites.net/products/data';
    return this.http.get(url);
  }

  getProducts(page: number): Observable<any[]> { // Método para obtener productos sin búsqueda
    const params = new HttpParams().set('page', page.toString());
    const url = 'https://mercadito-app.azurewebsites.net/products/data';
    return this.http.get<any[]>(url, { params });
  }

  searchProducts(page: number, query: string): Observable<any[]> { // Método para buscar productos
    const params = new HttpParams().set('page', page.toString()).set('query', query);
    const url = 'https://mercadito-app.azurewebsites.net/products/search';
    return this.http.get<any[]>(url, { params });
  }

  
  productDetails(id: string): Observable<any>{
    const url = 'https://mercadito-app.azurewebsites.net/products/data/' + id;
    return this.http.get(url);
  }

  register(jsonData: any): Observable<string> {
    const url = 'https://mercadito-app.azurewebsites.net/verify/registration';
    return this.http.post(url, jsonData, { headers: this.getHeaders(), observe: 'response', responseType: 'text' }) // Incluye los encabezados
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }

  createOrder(orderData: any): Observable<string> {
    const url = 'https://mercadito-app.azurewebsites.net/pedidos';
    return this.http.post(url, orderData, { headers: this.getHeaders(), observe: 'response', responseType: 'text' }) // Incluye los encabezados
      .pipe(
        map((response: HttpResponse<string>) => {
          return response.body || '';
        })
      );
  }


}