import { Observable } from 'rxjs/internal/Observable';
import { Author } from './../dto/Author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const MAIN_URL = 'http://localhost:8086';
const URL = '/Author';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  saveAuthor(author: Author): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/add', author);
  }
  getAllAuthors(): Observable<Array<Author>> {
    return this.http.get<Array<Author>>(MAIN_URL + URL + '/all');
  }
}
