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

  @Input() data!: Personagem[]; // Lista de personagens recebida como input
  displayedColumns: string[] = ['Id', 'Nome', 'Localização', 'Espécie', 'Status', 'Qtd Episódios'];

  constructor(private router: Router) {}

  // Método para navegar para a página de detalhes do personagem
  detailsPage(id: number): void {
    this.router.navigate(['/details', id]);
  }
  
}
