import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPersonagens } from '../../core/types/listaPersonagens';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://rickandmortyapi.com/api/character?page='
  constructor(private http: HttpClient) { }

   getCharecteres (page: number):Observable<ListaPersonagens> {
    return this.http.get<ListaPersonagens>(`${this.URL}${page.toString()}`)
  }
}
