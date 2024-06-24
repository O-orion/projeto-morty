import { Component, output, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {

  search = output<string>()

  // Pegando e transmitindo o parâmentro inserido pelo usuário
  inputSearch(event:any): void {
    let  valueSearch: string = event.target.value;
    this.search.emit(valueSearch)
  }
}
