import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('registerForm') registerForm!: NgForm;
  tipo_usuario = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController // Inyecta ToastController

  ) {}

  ngOnInit() {}
  
  updateTipoLabel() {
    const tipoLabel = document.getElementById('tipo_label') as HTMLLabelElement;
    tipoLabel.textContent = this.tipo_usuario ? 'Vendedor' : 'Comprador';
  }

  onRegister(form: NgForm) {
    const formData = new FormData();

    const jsonData = {
      usuario: form.value.usuario,
      boleta: form.value.boleta,
      password: form.value.password,
      password_conf: form.value.password_conf,
      email: form.value.email,
      tipo_usuario: this.tipo_usuario ? 'vendedor' : 'comprador'
    };

    // Envía los datos al backend
    this.apiService.register(jsonData).subscribe(
      async (response: any) => { // Especifica el tipo de respuesta como any
        console.log('Respuesta del registro:', response);

        const toast = await this.toastController.create({
          message: response, // Muestra el mensaje de respuesta en el toast
          duration: 2000,
          position: 'top'
        });
        toast.present();

        // Realiza el inicio de sesión automático
        this.apiService.login(form.value.boleta, form.value.password).subscribe(
          (loginResponse) => {
            localStorage.setItem('currentUser', JSON.stringify(loginResponse));
            const currentUserString = localStorage.getItem('currentUser');
            if (currentUserString !== null) {
              this.authService.setCurrentUser(JSON.parse(currentUserString));
              this.authService.setLoggedIn(true);
            }
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error al iniciar sesión después del registro:', error);
          }
        );
      },
      async (error) => {
        console.error('Error al registrar:', error);

        const toast = await this.toastController.create({
          message: error.error, // Muestra el mensaje de error en el toast
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    );
  }
}
