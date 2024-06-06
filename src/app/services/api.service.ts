import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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
    return this.http.post(url, body, { observe: 'response' }) // Observa la respuesta completa
      .pipe(
        map((response: HttpResponse<any>) => {
          // if (response.headers.has('Set-Cookie')) {
          //   const cookie = response.headers.get('Set-Cookie');
          //   if (cookie) {
          //     // Divide la cadena de la cookie en partes para obtener el nombre y el valor
          //     const cookieParts = cookie.split(';');
          //     const cookieNameValue = cookieParts[0].split('=');
          //     const cookieName = cookieNameValue[0];
          //     const cookieValue = cookieNameValue[1];
          
          //     // Crea un nuevo objeto de cookie con el dominio y la ruta
          //     const cookieObject = {
          //       [cookieName]: cookieValue,
          //       domain: '.azurewebsites.net', // Dominio de tu API (incluye el punto inicial para cookies de subdominio)
          //       path: '/', // Ruta de la cookie (normalmente "/")
          //       // Puedes agregar otras opciones de cookie aquí, como 'secure' o 'expires'
          //     };
          
          //     // Convierte el objeto de cookie a una cadena y almacénalo
          //     document.cookie = Object.entries(cookieObject).map(([key, value]) => `${key}=${value}`).join('; ');
          //   }
          // }
          return response.body;
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