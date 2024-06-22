import { Component } from '@angular/core';
import { FormCadastroComponent } from '../../shared/components/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormCadastroComponent
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
