import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LocationInfo, Personagem } from '../../../core/types/listaPersonagens';
import { CommonModule } from '@angular/common';
import { CardInfoTextComponent } from '../../../shared/components/card-info-text/card-info-text.component';
import { BoxItemComponent } from '../../../shared/components/box-item/box-item.component';
import { InfosPageDetailsComponent } from '../../../shared/components/infos-page-details/infos-page-details.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    CardInfoTextComponent,
    BoxItemComponent,
    InfosPageDetailsComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  characterId: number = 0;
  character!: Personagem;
  characterLocationInfo!: LocationInfo;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Pega o ID da URL
    this.characterId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchCharacterDetails();
  }

  // Obtendo os detalhes do personagem
  fetchCharacterDetails(): void {
    this.apiService.getCharacter(this.characterId).subscribe({
      next: (data) => {
        this.character = data;
        this.fetchLocationDetails(data.location.url);
      }
    });
  }

  // Obtendo os detalhes da localização
  fetchLocationDetails(url: string): void {
    // Obtendo o ID da localização a partir da URL
    const locationId = Number(url.split('/').pop());

    this.apiService.getLocationInfo(locationId).subscribe({
      next: (data) => {
        this.characterLocationInfo = data;
      }
    });
  }

  // Extraindo o número do episódio a partir da URL
  extractEpisodeNumber(url: string): string {
    return url.split('/').pop() || '';
  }
}
