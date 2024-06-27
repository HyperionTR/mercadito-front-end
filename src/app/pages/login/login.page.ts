import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private apiService: ApiService, private router: Router, private authService: AuthService, private toastController: ToastController
    ) { }

  username!: string;
  password!: string;
  
  ngOnInit() {
  }

  async onLogin() {

    const toast = await this.toastController.create({
      message: 'Iniciando sesión...',
      duration: 2000,
      position: 'top'
    });

    this.apiService.login(this.username, this.password).subscribe(
      (response) => {
        // Manejar la respuesta de la API (por ejemplo, redireccionar a otra página)
        console.log('Respuesta de la API:', response);
        this.authService.setCurrentUser(response.body);
        this.authService.setLoggedIn(true);
        this.router.navigate(['/']);
        toast.message = '¡Sesión iniciada!';
      },
      (error: HttpErrorResponse) => {
        toast.message = 'Error al iniciar sesión, ' + error.error;
      });

      toast.present();
  }

}
