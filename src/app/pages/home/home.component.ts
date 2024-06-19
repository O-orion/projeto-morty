import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { ApiService } from '../../shared/services/api.service';
import { TitleColorAnimadoComponent } from '../../shared/components/title-color-animado/title-color-animado.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    TitleColorAnimadoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
  api = ApiService

  constructor(private service: ApiService) {

  }
  ngOnInit() {
    this.service.getCharecteres(1).subscribe({
      next: (data) => {
        console.log(data.results)
      }
    })
  }

}
