import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-modos-visualizacao',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modos-visualizacao.component.html',
  styleUrl: './modos-visualizacao.component.scss'
})
export class ModosVisualizacaoComponent {
  filtroEscolhido = output<string>()
  toggleList = output<boolean>();

  modoLista: boolean = true;
  show: boolean =  false;

  filtros: string[] = ['Vivo', 'Morto', 'Desconhecido', 'Todos']
  filtro: string = 'Todos';

  exibirListagem() {
    this.modoLista = true;
    this.toggleList.emit(true)
  }

  exibirTabela() {
    this.modoLista = false
    this.toggleList.emit(false)
  }

  exibirMenuFiltro() {
    this.show = !this.show;
  }

  selecionarFiltro(filtro: string) {
    if(this.filtro != filtro) {
      this.filtro = filtro
      this.filtroEscolhido.emit(this.filtro)
    }
  }



}
