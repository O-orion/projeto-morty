import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ListaPersonagens, LocationInfo, Personagem } from '../../core/types/listaPersonagens';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://rickandmortyapi.com/api/'
  constructor(private http: HttpClient) { }

   getCharecteres (page: number):Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}character?page=${page.toString()}`).pipe(take(1))
  }

  getSearchCharacter(searchValue: string): Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}character?name=${searchValue}`).pipe(take(1))
  }

  getCaracter(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.URL}character/${id}`).pipe(take(1))
  }

  getLocationInfo(id: number) {
    return this.http.get<LocationInfo>(`${this.URL}location/${id}`)
  }
}
