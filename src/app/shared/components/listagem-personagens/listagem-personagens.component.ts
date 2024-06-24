import { Component, Input } from '@angular/core';
import { Personagem } from '../../../core/types/listaPersonagens';
import { Router } from '@angular/router';
import { CardPersonagemComponent } from '../card-personagem/card-personagem.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-listagem-personagens',
  standalone: true,
  imports: [
    CardPersonagemComponent,
    LoadingComponent
  ],
  templateUrl: './listagem-personagens.component.html',
  styleUrls: ['./listagem-personagens.component.scss']
})
export class ListagemPersonagensComponent {
  @Input() personagens!: Personagem[];

  constructor(private router: Router) { }

  // Navega para a página de detalhes do personagem com o ID fornecido
  detailsPage(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
