import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ListaPersonagens } from '../../core/types/listaPersonagens';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://rickandmortyapi.com/api/character?'
  constructor(private http: HttpClient) { }

   getCharecteres (page: number):Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}page=${page.toString()}`).pipe(take(1))
  }

  getSearchCharacter(searchValue: string): Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}name=${searchValue}`).pipe(take(1))
  }
}
