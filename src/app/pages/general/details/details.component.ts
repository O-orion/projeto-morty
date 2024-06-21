import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LocationInfo, Personagem } from '../../../core/types/listaPersonagens';
import { CommonModule } from '@angular/common';
import { CardInfoTextComponent } from '../../../shared/components/card-info-text/card-info-text.component';
import { BoxItemComponent } from '../../../shared/components/box-item/box-item.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    CardInfoTextComponent,
    BoxItemComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  id: number = 0
  personagem!: Personagem;
  locationInfo!: LocationInfo

  constructor(private service: ApiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id'))
    this.getCharacter()
  }

  getCharacter(): void {
    this.service.getCaracter(this.id).subscribe({
      next: (data) => {
        this.personagem = data
        this.getLocation(data.location.url)
      }
    })
  }

  getLocation(url: string):void {
    let parts = url.split('/')
    const id = Number(parts[parts.length - 1])

    this.service.getLocationInfo(id).subscribe({
      next: (data) => {
        this.locationInfo = data
      }
    })
  }

  getNumberEpisode(url:string): string {
    let parts =  url.split('/')
    let epi = parts[parts.length - 1]
    return epi;
  }
}
