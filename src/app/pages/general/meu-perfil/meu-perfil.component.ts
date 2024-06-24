import { Component } from '@angular/core';
import { FormCadastroComponent } from '../../../shared/components/form-cadastro/form-cadastro.component';
import { AuthService } from '../../../shared/services/auth.service';
import { Usuario } from '../../../core/types/usuario';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-perfil',
  standalone: true,
  imports: [
    FormCadastroComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './meu-perfil.component.html',
  styleUrl: './meu-perfil.component.scss'
})
export class MeuPerfilComponent {
  usuario!: Usuario; // Informações do usuário logado
  formulario!: FormGroup; // Formulário de edição do perfil
  formInvalido: boolean = false; // Flag para exibir mensagem de sucesso

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.formulario = fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {

    if (this.authService.isLoggedIn()) {
      // Obtém informações do usuário logado
      this.usuario = this.authService.getUsuario() as Usuario;
      this.preencherFormulario(); 
    }
  }

  // Preenche o formulário com os dados do usuário
  private preencherFormulario(): void {
    this.formulario.get('nome')?.setValue(this.usuario.nome);
    this.formulario.get('email')?.setValue(this.usuario.email);
  }

  // Atualiza os dados do usuário no serviço de autenticação
  atualizarDadosUsuario(): void {
    const nomeAtualizado = this.formulario.get('nome')?.value as string;
    const emailAtualizado = this.formulario.get('email')?.value as string;

    // Verifica se houve alterações nos dados do usuário
    if (emailAtualizado !== this.usuario.email || nomeAtualizado !== this.usuario.nome) {
      this.usuario.email = emailAtualizado;
      this.usuario.nome = nomeAtualizado;

      // Chama o serviço para atualizar os dados do usuário
      const atualizacaoSucesso = this.authService.updateUser(this.usuario);

      if (atualizacaoSucesso) {
        this.formInvalido = true; // Exibe mensagem de sucesso após a atualização
      }
    }
  }
}
