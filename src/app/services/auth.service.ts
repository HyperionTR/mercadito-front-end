import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor() {}

  // Método para obtener el observable del estado de inicio de sesión
  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Método para obtener el observable del usuario actual
  currentUser$(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  // Método para establecer el estado de inicio de sesión
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  // Método para establecer el usuario actual
  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }
}