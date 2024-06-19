import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://rickandmortyapi.com/api/character?page='
  constructor(private http: HttpClient) { }

   getCharecteres (page: number):Observable<any> {
    return this.http.get<any>(`${this.URL}/${page}`)
  }
}
