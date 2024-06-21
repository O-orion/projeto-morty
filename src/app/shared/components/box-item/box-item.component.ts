import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-item',
  standalone: true,
  imports: [],
  templateUrl: './box-item.component.html',
  styleUrl: './box-item.component.scss'
})
export class BoxItemComponent {
  @Input() total: string = ''
}
