import { Component, Input } from '@angular/core';
import { Personagem } from '../../../core/types/listaPersonagens';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-exibir-tabela-personagens',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './exibir-tabela-personagens.component.html',
  styleUrl: './exibir-tabela-personagens.component.scss'
})
export class ExibirTabelaPersonagensComponent {

  @Input() data!: Personagem[]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  ngOnInit() {
    console.log('olá')
    console.log(this.data)
  }


}
