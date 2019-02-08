import { Observable } from 'rxjs/internal/Observable';
import { Book } from './../dto/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const MAIN_URL = 'http://localhost:8086';
const URL = '/book';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  saveBook(book: Book): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/add', book);
  }

  getAllBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(MAIN_URL + URL + '/all');
  }
}
