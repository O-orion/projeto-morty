import { Component,Renderer2 } from '@angular/core';
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
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  inputWidth: string = '30px'; // Largura inicial do input
  nomeUsuario: string = ''
  isMenuVisible = false;
  constructor(private router: Router, private authService: AuthService, private renderer:  Renderer2) { }

  ngOnInit() {
    let usuario = this.authService.getUsuario()

    if (usuario != null) {
      this.nomeUsuario = usuario.nome
    }
  }


  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    if (this.isMenuVisible) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  private addDocumentClickListener() {
    this.renderer.listen('document', 'click', this.documentClickListener.bind(this));
  }

  private removeDocumentClickListener() {
    this.renderer.listen('document', 'click', () => {});
  }

  private documentClickListener(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.profile-icon');

    if (!clickedInside) {
      this.isMenuVisible = false;
      this.removeDocumentClickListener();
    }
  }


  expandInput() {
    this.inputWidth = '150px'; // Largura expandida ao passar o mouse
  }

  collapseInput() {
    // Se o input não estiver focado, volta para a largura inicial
    if (!document.activeElement || document.activeElement.tagName.toLowerCase() !== 'input') {
      this.inputWidth = '30px';
    }
  }

  inputSearch(event:any): void {
    console.log(event.target.value)
  }

  irParHome(): void {
    this.router.navigate(['/'])
  }
}
