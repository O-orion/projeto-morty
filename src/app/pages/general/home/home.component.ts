import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { ApiService } from '../../../shared/services/api.service';
import { TitleColorAnimadoComponent } from '../../../shared/components/title-color-animado/title-color-animado.component';
import { ListagemPersonagensComponent } from '../../../shared/components/listagem-personagens/listagem-personagens.component';
import { ListaPersonagens, Personagem } from '../../../core/types/listaPersonagens';
import { InputSearchComponent } from '../../../shared/components/input-search/input-search.component';
import { ModosVisualizacaoComponent } from '../../../shared/components/modos-visualizacao/modos-visualizacao.component';
import { ExibirTabelaPersonagensComponent } from '../../../shared/components/exibir-tabela-personagens/exibir-tabela-personagens.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    TitleColorAnimadoComponent,
    ListagemPersonagensComponent,
    InputSearchComponent,
    ModosVisualizacaoComponent,
    ExibirTabelaPersonagensComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent  {
  exibirListaPersonagem: boolean = false;
  data!: Personagem[]
  page: number = 1;
  loading: boolean = false;
  nameFilter: string = ''

  constructor(private service: ApiService) {

  }
  ngOnInit() {
    this.data = []
    this.loadCharacters()

  }

  loadCharacters(reaset:boolean = false): void {
    if (this.loading) return;

    this.loading = true;
    if (reaset) {
      this.data = []
    }

    this.service.getCharecteres(this.page).subscribe({
      next: (result: ListaPersonagens) => {
        // Verifica se já existe dados carregados
        if (this.data && this.data.length > 0) {

          // Concatena os novos resultados com os existentes, garantindo que não haja duplicações
          this.data = [...this.data, ...result.results]
        } else {
          // Se não há dados ainda, simplesmente atribui os resultados
          this.data = result.results;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 100;

    if (scrollPosition >= threshold && !this.loading) {
      if (this.nameFilter.trim() == '') {
        this.page++;
        this.loadCharacters();

      }
    }
  }

  onSearch(name: string): void {
    this.nameFilter = name;

    if (this.nameFilter.trim() !== '') {
      this.service.getSearchCharacter(this.nameFilter).subscribe({
        next:(data) => {
          this.data = data.results
        },
        error: (er) => {
          this.data= []
        }
      })
    } else {
      this.page = 1;
      this.loadCharacters(true);
    }
  }

  exibirModoLista(exibirLista: boolean) {
    this.exibirListaPersonagem = exibirLista;
    console.log( exibirLista )
  }
}
