import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modos-visualizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modos-visualizacao.component.html',
  styleUrls: ['./modos-visualizacao.component.scss']
})
export class ModosVisualizacaoComponent {

  @Output() filtroEscolhido = new EventEmitter<string>();
  @Output() toggleList = new EventEmitter<boolean>();

  isListMode: boolean = true;
  isFilterMenuVisible: boolean = false;
  filtros: string[] = ['Vivo', 'Morto', 'Desconhecido', 'Todos'];
  filtroAtual: string = 'Todos'; 

  // Exibe a listagem
  exibirListagem() {
    this.isListMode = true;
    this.toggleList.emit(true);
  }

  // Exibe a tabela
  exibirTabela() {
    this.isListMode = false;
    this.toggleList.emit(false);
  }

  // Exibe ou esconde o menu de filtro
  exibirMenuFiltro() {
    this.isFilterMenuVisible = !this.isFilterMenuVisible;
  }

  // Seleciona um filtro
  selecionarFiltro(filtro: string) {
    if (this.filtroAtual !== filtro) {
      this.filtroAtual = filtro;
      this.filtroEscolhido.emit(this.filtroAtual);
    }
  }
}
