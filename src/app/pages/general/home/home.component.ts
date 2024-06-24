import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { ApiService } from '../../../shared/services/api.service';
import { TitleColorAnimadoComponent } from '../../../shared/components/title-color-animado/title-color-animado.component';
import { ListagemPersonagensComponent } from '../../../shared/components/listagem-personagens/listagem-personagens.component';
import {
  ListaPersonagens,
  Personagem,
} from '../../../core/types/listaPersonagens';
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
    ExibirTabelaPersonagensComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  exibirListaPersonagem: boolean = true;

  data: Personagem[] = []; // Lista de personagens exibidos na tela
  originalData: Personagem[] = []; // Lista original de todos os personagens carregados

  page: number = 1; // Página atual de carregamento de personagens
  loading: boolean = false; // Indicador de carregamento
  nameFilter: string = ''; // Filtro por nome de personagem
  filtro: string = 'Todos'; // Filtro de status inicial, padrão é "Todos"

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  // Carrega os personagens da API
  loadCharacters(reset: boolean = false): void {
    if (this.loading) return;

    this.loading = true;
    if (reset) {
      this.page = 1; // Reinicia a página se reset for verdadeiro
      this.originalData = []; // Reinicia os dados originais
    }

    this.service.getCharacters(this.page).subscribe({
      next: (result: ListaPersonagens) => {
        if (reset) {
          this.originalData = result.results;
        } else {
          this.originalData = [...this.originalData, ...result.results]; // Adiciona novos resultados aos dados originais
        }

        // Aplica os filtros após carregar os dados, se tiver filtro selecionado
        this.applyFilters();

        this.loading = false;
        this.page++;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  // Aplica os filtros aos dados exibidos
  applyFilters() {
    switch (this.filtro) {
      case 'Vivo':
        this.data = this.originalData.filter(
          (personagem) => personagem.status === 'Alive'
        );
        break;
      case 'Morto':
        this.data = this.originalData.filter(
          (personagem) => personagem.status === 'Dead'
        );
        break;
      case 'Desconhecido':
        this.data = this.originalData.filter(
          (personagem) => personagem.status === 'unknown'
        );
        break;
      case 'Todos':
      default:
        this.data = [...this.originalData];
        break;
    }
  }

  // Listener para detectar o scroll na janela
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 100;

    if (scrollPosition >= threshold && !this.loading) {
      if (this.nameFilter.trim() === '') {
        this.loadCharacters(); // Carrega mais personagens ao rolar para o fim da página
      }
    }
  }

  // Função para filtrar por nome de personagem
  onSearch(name: string): void {
    this.nameFilter = name.trim();

    if (this.nameFilter !== '') {
      this.service.searchCharacters(this.nameFilter).subscribe({
        next: (data) => {
          this.originalData = data.results; // Define os resultados da pesquisa como dados originais
          this.applyFilters(); // Aplica os filtros aos resultados da pesquisa
        },
        error: () => {
          this.originalData = []; // Limpa os dados originais em caso de erro na pesquisa
          this.data = []; // Limpa os dados exibidos
        },
      });
    } else {
      this.loadCharacters(true); // Carrega todos os personagens se o filtro de nome estiver vazio
    }
  }

  // Função para filtrar por status (Vivo, Morto, Desconhecido)
  filtrarListaPorStatus(filtro: string) {
    this.filtro = filtro;
    this.applyFilters(); 
  }

  exibirModoLista(exibirLista: boolean) {
    if (exibirLista != this.exibirListaPersonagem) {
      this.exibirListaPersonagem = exibirLista;
    }
  }

}
