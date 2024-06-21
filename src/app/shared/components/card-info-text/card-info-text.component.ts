import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-text',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-info-text.component.html',
  styleUrl: './card-info-text.component.scss'
})
export class CardInfoTextComponent {
  @Input() text: string = ''
  @Input() titule: string = ''
  @Input() status?: string = ''
}
