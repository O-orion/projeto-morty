import { Component, Input } from '@angular/core';
import { Personagem } from '../../../core/types/listaPersonagens';

@Component({
  selector: 'app-exibir-tabela-personagens',
  standalone: true,
  imports: [],
  templateUrl: './exibir-tabela-personagens.component.html',
  styleUrl: './exibir-tabela-personagens.component.scss'
})
export class ExibirTabelaPersonagensComponent {

  @Input() data!: Personagem[]

  
}
