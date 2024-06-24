import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonSubmitComponent } from '../button-submit/button-submit.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../../core/types/auth';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    InputFieldComponent,
    ButtonSubmitComponent,
    ReactiveFormsModule
  ],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const userLoggin = this.formulario.getRawValue() as Login;
      const result = this.authService.login(userLoggin.email, userLoggin.senha);

      if (result) {
        this.router.navigate(['/']);
      } else {
        alert('Dados inválidos!');
      }
    } else {
      console.log('Formulário inválido!');
    }
  }

  irParaCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
