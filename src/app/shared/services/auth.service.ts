import { Injectable } from '@angular/core';
import { Usuario } from '../../core/types/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Registra um usuário no localStorage se não existir outro com o mesmo e-mail.
  register(user: Usuario): boolean {
    if (!localStorage.getItem(user.email)) {
      localStorage.setItem(user.email, JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Realiza o login comparando o e-mail e senha com os dados no localStorage.
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

  // Retorna as informações do usuário logado.
  getUsuario(): Usuario | null {
    const email = localStorage.getItem('loggedInUser');
    if (email) {
      const user = localStorage.getItem(email);
      return user ? JSON.parse(user) as Usuario : null;
    }
    return null;
  }

  // Atualiza as informações do usuário no localStorage.
  updateUser(user: Usuario): boolean {
    const email = localStorage.getItem('loggedInUser');
    if (email) {
      localStorage.setItem(email, JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Verifica se há um usuário logado.
  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('loggedInUser');
    }
    return false;
  }

  // Realiza o logout do usuário removendo-o do localStorage e navegando para a página de login.
  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
