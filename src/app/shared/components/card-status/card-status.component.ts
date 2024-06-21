import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-status',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.scss'
})
export class CardStatusComponent {
  @Input() status: string = ''
}
