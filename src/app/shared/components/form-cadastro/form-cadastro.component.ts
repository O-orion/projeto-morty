import { Component } from '@angular/core';
import { ButtonSubmitComponent } from '../button-submit/button-submit.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../../core/types/usuario';

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

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.formulario = fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['',[ Validators.required]],
      senha: ['',[ Validators.required]],
      confirmaSenha: ['', [Validators.required]],
    })
  }


  onSubmit(): void {
    let user: Usuario = this.formulario.getRawValue() as Usuario

    let result = this.service.register(user)
    if (result) {
      alert('Cadastrado com sucesso!')
    } else {
      alert('Preencha todos os campoa adequadamente!')
    }
  }
}
