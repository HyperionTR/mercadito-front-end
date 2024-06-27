import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

  username!: string;
  password!: string;
  
  ngOnInit() {
  }

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe(
      (response) => {
        // Manejar la respuesta de la API (por ejemplo, redireccionar a otra página)
        console.log('Respuesta de la API:', response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        const currentUserString = localStorage.getItem('currentUser');
        if (currentUserString !== null) {
          this.authService.setCurrentUser(JSON.parse(currentUserString));
          this.authService.setLoggedIn(true);
        }
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']); // Redirige al login en caso de error 401
        } else {
          console.error('Error al iniciar sesión:', error);
        }
      });
  }

}
