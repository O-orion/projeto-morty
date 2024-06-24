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
  user!: Usuario;
  formulario!: FormGroup;
  formInvalido: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder ) {
    this.formulario = fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
   }

  ngOnInit()  {
    if (this.authService.isLoggedIn()) {
      this.user = this.authService.getUsuario() as Usuario
      this.preencherFormUser()
    }
  }

  private preencherFormUser():void {
    this.formulario.get('nome')?.setValue(this.user.nome)
    this.formulario.get('email')?.setValue(this.user.email)
  }

  atualizarDadosUser(): void {
    let campoNome = this.formulario.get('nome')?.value
    let campoEmail = this.formulario.get('email')?.value
    let camposIguais = campoEmail == this.user.email && campoNome == this.user.nome

    if (!camposIguais) {

      this.user.email = this.formulario.get('email')?.value as string
      this.user.nome = this.formulario.get('nome')?.value as string


      let result = this.authService.updateUser(this.user)

      if (result){
        this.formInvalido = true;
      }
    }

  }
}
