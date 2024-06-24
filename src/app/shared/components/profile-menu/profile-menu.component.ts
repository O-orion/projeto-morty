import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'] 
})
export class ProfileMenuComponent {

  @Input() isVisible: boolean = false;
  @Output() menuClosed = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) { }

  // Realiza o logout e emite um evento indicando que o menu foi fechado
  logout(): void {
    this.authService.logout();
    this.menuClosed.emit();
  }

  // Navega para a página de perfil e emite um evento indicando que o menu foi fechado
  goToProfile(): void {
    this.router.navigate(['/perfil']);
    this.menuClosed.emit();
  }
}
