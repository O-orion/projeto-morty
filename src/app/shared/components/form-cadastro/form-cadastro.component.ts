import { Component, Input } from '@angular/core';
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
  formulario!: FormGroup; // Formulário reativo do Angular
  @Input() title: string = ''; // Título do formulário, recebido como input
  @Input() exibirSenha: boolean = true; // Flag para exibir campos de senha

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      confirmaSenha: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const usuario: Usuario = this.formulario.getRawValue() as Usuario;
      const cadastradoComSucesso = this.authService.register(usuario);
      if (cadastradoComSucesso) {
        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Preencha todos os campos corretamente.');
      }
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
