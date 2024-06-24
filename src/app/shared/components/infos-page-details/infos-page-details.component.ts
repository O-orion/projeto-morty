import { Component, Input } from '@angular/core';
import { LocationInfo, Personagem } from '../../../core/types/listaPersonagens';
import { CardInfoTextComponent } from '../card-info-text/card-info-text.component';

@Component({
  selector: 'app-infos-page-details',
  standalone: true,
  imports: [
    CardInfoTextComponent
  ],
  templateUrl: './infos-page-details.component.html',
  styleUrl: './infos-page-details.component.scss'
})
export class InfosPageDetailsComponent {
  @Input() character!: Personagem;
  @Input() locationInfo!:  LocationInfo
}
