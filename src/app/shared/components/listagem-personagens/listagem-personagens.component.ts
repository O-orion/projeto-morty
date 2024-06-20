import { Component, Input } from '@angular/core';
import { ListaPersonagens, Personagem } from '../../../core/types/listaPersonagens';

@Component({
  selector: 'app-listagem-personagens',
  standalone: true,
  imports: [],
  templateUrl: './listagem-personagens.component.html',
  styleUrl: './listagem-personagens.component.scss'
})
export class ListagemPersonagensComponent {

  @Input() data!: Personagem[]

 ngOnInit() {

 }

}
