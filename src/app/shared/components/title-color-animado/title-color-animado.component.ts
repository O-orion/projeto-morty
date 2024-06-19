import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-color-animado',
  standalone: true,
  imports: [],
  templateUrl: './title-color-animado.component.html',
  styleUrl: './title-color-animado.component.scss'
})
export class TitleColorAnimadoComponent {
  @Input() title:string  = ''
}
