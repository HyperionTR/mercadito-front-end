import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AlertController } from '@ionic/angular';
import { HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  newUserType: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.authService.currentUser$(false).subscribe(currentUser => {
      this.currentUser = currentUser;
      this.isLoggedIn = this.currentUser !== null;
      this.newUserType= this.currentUser?.tipo_de_usuario === 'vendedor' ? 'comprador' : 'vendedor';
      console.log(this.currentUser);
    });
  }

  async updateUserType() {

    const toast = await this.toastController.create({
      message: 'Cambiando tipo de usuario...',
      duration: 2000,
      position: 'top'
    });

    if ( !this.currentUser || !this.currentUser.boleta || !this.currentUser.tipo_de_usuario || !this.currentUser.nombre_de_usuario ) {
      toast.message = 'No se ha iniciado sesión';
      toast.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Cambiar tipo de usuario',
      subHeader: (this.newUserType === 'comprador' ? '¡Se eliminaran todos tus productos!' : ''),
      message: this.newUserType === 'comprador' ? `
        ¿Estás seguro que deseas cambiar tu tipo de usuario a ${this.newUserType}?. 
        Al volverte comprador, todos tus productos se eliminaran permanentemente.
      ` : `
        ¿Estás seguro que deseas cambiar tu tipo de usuario a ${this.newUserType}?
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          role: 'confirm',
          cssClass: 'danger',
          handler: (alertData) => {
            this.apiService.updateUserType( this.newUserType, alertData.password ).subscribe(
              async (response: string) => {
                const toast = await this.toastController.create({
                  message: response,
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
                this.onLogout();
              }, async (error) => {
                console.error('Error al cambiar tipo de usuario:', error);
                const toast = await this.toastController.create({
                  message: 'Error al cambiar tipo de usuario: ' + error.error,
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
              }
            );
          }
        }
      ],
      inputs: [{
        name: 'password',
        type: 'password',
        placeholder: 'Contraseña',
        value: '',
      }]
    });

    await alert.present();
  }

  async onLogout() {
    this.apiService.logout().subscribe(
      async (response) => {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.authService.setLoggedIn(false);
        this.authService.setCurrentUser(null);
        this.router.navigate(['/']);

        const toast = await this.toastController.create({
          message: response,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      },
      async (error) => {
        console.error('Error al cerrar sesión:', error);
        const toast = await this.toastController.create({
          message: error.error,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    );
  }
}
