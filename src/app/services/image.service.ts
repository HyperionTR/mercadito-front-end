import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order, Product } from '../components/order-card/order-card.component';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

	constructor(private http: HttpClient) { }

	getProductImage(image: string | null): Observable<string> {
		let image_src = '';
		// Possible image sources
		let backend_url = 'https://mercadito-app.azurewebsites.net/images/products/';
		let generic_url = 'https://picsum.photos';
		let generic_url_seed = 'https://picsum.photos/seed';

		// If there is no image, return a generic image
		if (image === null) {
			return new Observable<string>(observer => {
				observer.next(`${generic_url}/200/300`);
				observer.complete();
			});
		}

		// Hacemos una petición al backend y en caso de 404, retornarmos la URL generica con la semilla del id
		return this.http.get(`${backend_url}${image}`, { responseType: 'blob' }).subscribe(
			
		);
		
	}

}