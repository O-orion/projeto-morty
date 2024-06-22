import { Component, output } from '@angular/core';

@Component({
  selector: 'app-modos-visualizacao',
  standalone: true,
  imports: [],
  templateUrl: './modos-visualizacao.component.html',
  styleUrl: './modos-visualizacao.component.scss'
})
export class ModosVisualizacaoComponent {
  modoLista: boolean = false;
  toggleList = output<boolean>();

  toggle() {
    this.modoLista = !this.modoLista;
    this.toggleList.emit(this.modoLista)
  }

}
