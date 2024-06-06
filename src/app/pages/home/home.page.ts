import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  products: any[] = []; // Array para almacenar los productos
  currentPage = 1; // Página actual
  searchTerm: string = ''; // Término de búsqueda
  isLoggedIn: boolean = false;
  currentUser: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll; // Referencia al componente de scroll infinito


  constructor(
    private apiService: ApiService, 
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.checkLoggedIn();
    // this.loadData(null);

    this.authService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.currentUser$().subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(this.currentUser);
    });

    this.apiService.getProducts(this.currentPage).subscribe(
      (data: any) => {
        this.products = data; 
        this.currentPage++;
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  checkLoggedIn() {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString !== null) {
      this.authService.setCurrentUser(JSON.parse(currentUserString));
      this.authService.setLoggedIn(true);
    }
  }

    loadData(event: any) { 
    if (this.searchTerm) { // Si hay un término de búsqueda, usa products/search
      this.apiService.searchProducts(this.currentPage, this.searchTerm).subscribe(
        (data: any) => {
          // Al no haber más productos, se deshabilita el scroll infinito
          if (data && data.length > 0) { 
            this.products = this.products.concat(data);
            this.currentPage++; 
          } else {
            if (event) { 
              event.target.disabled = true;
            }
          }
  
          if (event) { 
            event.target.complete(); // Completa el evento del scroll infinito
          }
        },
        (error) => {
          console.error('Error al cargar productos de búsqueda:', error);
          if (event) { 
            event.target.complete(); // Completa el evento del scroll infinito
          }
        }
      );
    } else { // Si no hay término de búsqueda, carga más productos de products/data
      this.apiService.getProducts(this.currentPage).subscribe(
        (data: any) => {
          if (data && data.length > 0) { 
            this.products = this.products.concat(data);
            this.currentPage++; 
          } else {
            if (event) { 
              event.target.disabled = true;
            }
          }
  
          if (event) { 
            event.target.complete(); // Completa el evento del scroll infinito
          }
        },
        (error) => {
          console.error('Error al cargar más productos:', error);
          if (event) { 
            event.target.complete(); // Completa el evento del scroll infinito
          }
        }
      );
    }
  }

  onSearchChange() {
    this.products = [];
    this.currentPage = 1;
    this.infiniteScroll.disabled = false; // Habilita el scroll infinito nuevamente
    this.loadData(null);
  }

}
