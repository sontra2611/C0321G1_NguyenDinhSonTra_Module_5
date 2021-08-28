import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public API = 'http://localhost:3000/todo';
  constructor(public http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

  findById(id): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API + '/' + id);
  }

  delete(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  create(todo): Observable<Todo> {
    return this.http.post<Todo>(this.API, todo);
  }

  edit(todo, todoId): Observable<Todo> {
    return this.http.put<Todo>(this.API + '/' + todoId, todo);
  }
}
