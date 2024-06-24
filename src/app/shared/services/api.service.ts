import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ListaPersonagens, LocationInfo, Personagem } from '../../core/types/listaPersonagens';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URL = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  // Obtém uma lista de personagens com paginação
  getCharacters(page: number): Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}character?page=${page}`).pipe(take(1));
  }

  // Busca personagens por nome
  searchCharacters(searchValue: string): Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}character?name=${searchValue}`).pipe(take(1));
  }

  // Obtém informações de um personagem específico por ID
  getCharacter(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.URL}character/${id}`).pipe(take(1));
  }

  // Obtém informações de uma localização por ID
  getLocationInfo(id: number): Observable<LocationInfo> {
    return this.http.get<LocationInfo>(`${this.URL}location/${id}`).pipe(take(1));
  }
}
