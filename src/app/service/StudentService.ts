import { Student } from './../dto/Student';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

import {Injectable} from '@angular/core';

export const MAIN_URL = 'http://localhost:8087';
const URL = '/Student';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(MAIN_URL + URL + '/all');
  }
  searchStudent(id: number): Observable<Student> {
    return this.http.get<Student>(MAIN_URL + URL + '/find' + '/' + id);
  }
  saveStudent(student: Student): Observable<boolean> {
    console.log(student);
    return this.http.post<boolean>(MAIN_URL + URL + '/add', student);
  }
  updateStudent(student: Student): Observable<boolean> {
    console.log(student);
    return this.http.put<boolean>(MAIN_URL + URL + '/update', student);
  }
  deleteStudent(id: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/delete' + '/' + id);
  }

}
