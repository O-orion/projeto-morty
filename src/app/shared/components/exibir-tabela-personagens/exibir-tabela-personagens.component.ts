import { Component, Input } from '@angular/core';
import { Personagem } from '../../../core/types/listaPersonagens';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailsPage(id: number):void {
    this.router.navigate(['/details', id])
   }


}
