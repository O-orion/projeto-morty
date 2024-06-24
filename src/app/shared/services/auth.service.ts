import { Injectable } from '@angular/core';
import { Usuario } from '../../core/types/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  register(user: Usuario): boolean {
    if (!localStorage.getItem(user.email)) {
      localStorage.setItem(user.email, JSON.stringify(user))
      return true;
    } else {
      return false
    }
  }

  login(email: string, password: string): boolean {
    const user = localStorage.getItem(email);

    if (user) {
      const parsedUser = JSON.parse(user) as Usuario;

      if (parsedUser.senha === password) {
        localStorage.setItem('loggedInUser', email);
        return true;
      }
    }
    return false;
  }

  getUsuario(): Usuario | null{
    let email = localStorage.getItem('loggedInUser') as string

    if (email) {
      let user = localStorage.getItem(email)

      if (user) {
        return JSON.parse(user) as Usuario
      }
    }

    return null

  }

  updateUser(user:Usuario) {
    const email = localStorage.getItem('loggedInUser');

    if (email) {
      localStorage.setItem(email, JSON.stringify(user))
      return true;
    }

    return false;

  }

  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('loggedInUser');
    }
    return false;
  }

  logout () {
    localStorage.removeItem('loggedInUser')
    this.router.navigate(['/login'])
  }


}
