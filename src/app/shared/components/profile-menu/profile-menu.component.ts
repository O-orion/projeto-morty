import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {


  @Input() show: boolean = false
  constructor (private authService: AuthService) { }

  logout() {
    this.authService.logout()
    console.log('oie')
  }

}
