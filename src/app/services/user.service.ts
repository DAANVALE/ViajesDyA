import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth) {}

  register( {email, password}: any)
  {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  get isLogged(): boolean{
    return this.isLoggedClient || this.isLoggedAdmin;
  }

  get isLoggedClient(): boolean{
    return localStorage.getItem('navbar') === 'Client';
  }

  get isLoggedAdmin(): boolean{
    return localStorage.getItem('navbar') === 'Admin';
  }

}