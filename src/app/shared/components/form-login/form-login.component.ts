import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonSubmitComponent } from '../button-submit/button-submit.component';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.getRawValue());
    } else {
      console.log('Formulário inválido!');
    }
  }


  irParaCadastro(): void {
    this.router.navigate(['/cadastro'])
  }
}
