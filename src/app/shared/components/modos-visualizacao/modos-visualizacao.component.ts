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
  modoLista: boolean = true;
  toggleList = output<boolean>();


  exibirListagem() {
    this.modoLista = true;
    this.toggleList.emit(true)
  }

  exibirTabela() {
    this.modoLista = false
    this.toggleList.emit(false)
  }

}