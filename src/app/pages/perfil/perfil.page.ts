import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private toastController: ToastController
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
