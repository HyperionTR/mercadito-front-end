import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})

/**
 * Servicio para manejar la autenticación de usuarios
 * Contiene Observables parasuscribirse al valor actual del usuario y estado de inicio de sesión
 */
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private apiService: ApiService) {}

  // Método para obtener el observable del estado de inicio de sesión
  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Método para obtener el observable del usuario actual
  currentUser$(login_redirect: boolean): Observable<User | null> {

    if ( !this.currentUserSubject.value ) {
      this.checkLoggedIn(login_redirect).subscribe();
    }

    return this.currentUserSubject.asObservable();
  }

  // Método para establecer el estado de inicio de sesión
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  // Método para establecer el usuario actual
  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  checkLoggedIn(login_redirect: boolean): Observable<boolean> {
    return this.apiService.verifySession(login_redirect).pipe(
      tap((user: any) => {
        if (user) {
          this.setCurrentUser(user);
          this.setLoggedIn(true);
        } else {
          this.setCurrentUser(null);
          this.setLoggedIn(false);
        }
      })
    );
  }

}