import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ProfileMenuComponent,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  nomeUsuario: string = '';
  isMenuVisible = false; // Estado da visibilidade do menu

  constructor(private router: Router, private authService: AuthService, private renderer: Renderer2) { }

  ngOnInit() {
    const usuario = this.authService.getUsuario();
    if (usuario) {
      this.nomeUsuario = usuario.nome.split(' ')[0];
    }
  }

  // Alterna a visibilidade do menu de perfil
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    if (this.isMenuVisible) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  // Adiciona um listener para clicar fora do menu
  private addDocumentClickListener() {
    this.renderer.listen('document', 'click', this.documentClickListener.bind(this));
  }

  // Remove o listener de clicar fora do menu
  private removeDocumentClickListener() {
    this.renderer.listen('document', 'click', () => {});
  }

  // Listener para detectar cliques fora do menu
  private documentClickListener(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.profile-icon');

    if (!clickedInside) {
      this.isMenuVisible = false;
      this.removeDocumentClickListener();
    }
  }


  // Navega para a página inicial
  irParaHome(): void {
    this.router.navigate(['/']);
  }
}
