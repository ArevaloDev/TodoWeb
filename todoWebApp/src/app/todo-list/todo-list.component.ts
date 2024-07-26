import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SearchTodoComponent } from '../shared/search-todo/search-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone:true,
  imports:[NavbarComponent, SearchTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {

}
