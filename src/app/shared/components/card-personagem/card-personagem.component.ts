import { Component, Input } from '@angular/core';
import { Personagem } from '../../../core/types/listaPersonagens';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardStatusComponent } from '../card-status/card-status.component';

@Component({
  selector: 'app-card-personagem',
  standalone: true,
  imports: [
    CommonModule,
    CardStatusComponent
  ],
  templateUrl: './card-personagem.component.html',
  styleUrl: './card-personagem.component.scss'
})
export class CardPersonagemComponent {
  @Input() personagem: Personagem = {} as Personagem;

  constructor (private router: Router) { }

  detailsPage(id: number):void {
    this.router.navigate(['/details', id])
   }

}


