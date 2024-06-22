import { Component } from '@angular/core';
import { ButtonSubmitComponent } from '../button-submit/button-submit.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [
    ButtonSubmitComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss'
})
export class FormCadastroComponent {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['',[ Validators.required]],
      senha: ['',[ Validators.required]],
      confirmaSenha: ['', [Validators.required]],
    })
  }


  onSubmit(): void {
    console.log(this.formulario.getRawValue())
  }
}
