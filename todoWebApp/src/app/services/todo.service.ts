import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItems, UpdateTodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoSubject = new BehaviorSubject<TodoItems[]>([]);
  todo$ = this.todoSubject.asObservable();
  public api = 'https://localhost:7261/api'
  constructor(
    private http:HttpClient
  ) { }

  SendTasks = (body:TodoItems) => {
  return this.http.post(`${this.api}/TodoItems`, body).subscribe(() => {
    this.getTasks();

  })
  }

  getTasks = () => {
    return this.http.get<TodoItems[]>(`${this.api}/TodoItems`).subscribe((todos => {
      this.todoSubject.next(todos);
    }))
  }

  updateTodo = (id:number | undefined, todo:UpdateTodo) => {
    console.log('enviar', todo);
    
    this.http.patch(`${this.api}/TodoItems/${id}`, todo).subscribe((response => {
      console.log(response);
      this.getTasks();
    }))
  }
}
