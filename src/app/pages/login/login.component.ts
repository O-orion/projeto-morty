import { Component } from '@angular/core';
import { BoxImageLogoComponent } from '../../shared/components/box-image-logo/box-image-logo.component';
import { FormLoginComponent } from '../../shared/components/form-login/form-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BoxImageLogoComponent,
    FormLoginComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
