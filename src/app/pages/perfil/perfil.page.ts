import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  newUserType: string = this.currentUser?.tipo_de_usuario === 'vendedor' ? 'comprador' : 'vendedor';

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.checkLoggedIn();

    this.authService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.currentUser$().subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(this.currentUser);
    });
  }

  checkLoggedIn() {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString !== null) {
      this.authService.setCurrentUser(JSON.parse(currentUserString));
      this.authService.setLoggedIn(true);
    }
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
      message: this.newUserType === 'comprador' ? `
        ¿Estás seguro que deseas cambiar tu tipo de usuario a ${this.newUserType}?
      ` : `
        ¿Estás seguro que deseas cambiar tu tipo de usuario a ${this.newUserType}? <br>
        Al cambiar tu tipo de usuario, perderás todos los productos que hayas publicado.

        <strong>Esta acción no es reversible</strong>
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
          handler: () => {
            this.apiService.updateUserType( this.currentUser!, this.newUserType ).subscribe(
              async (response) => {
                const toast = await this.toastController.create({
                  message: response,
                  duration: 2000,
                  position: 'top'
                });
                toast.present();
                this.onLogout();
              },
              async (error) => {
                console.error('Error al cambiar tipo de usuario:', error);
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
      ]
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
