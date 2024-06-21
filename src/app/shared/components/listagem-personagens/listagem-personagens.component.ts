import { Component, Input } from '@angular/core';
import { ListaPersonagens, Personagem } from '../../../core/types/listaPersonagens';
import { Router } from '@angular/router';
import { CardPersonagemComponent } from '../card-personagem/card-personagem.component';

@Component({
  selector: 'app-listagem-personagens',
  standalone: true,
  imports: [
    CardPersonagemComponent
  ],
  templateUrl: './listagem-personagens.component.html',
  styleUrl: './listagem-personagens.component.scss'
})
export class ListagemPersonagensComponent {

  @Input() data!: Personagem[]

  constructor(private router: Router) { }

  ngOnInit() {

  }

 detailsPage(id: number):void {
  this.router.navigate(['/details', id])
 }

}
