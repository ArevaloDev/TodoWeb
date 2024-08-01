import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SearchTodoComponent } from '../shared/search-todo/search-todo.component';
import { TodoService } from '../services/todo.service';
import { TodoItems } from '../interfaces/todo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone:true,
  imports:[NavbarComponent, SearchTodoComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  public todoList:TodoItems[] = [];
  constructor(
    private  todoService:TodoService,
  ){
  }

  
  ngOnInit(): void {

    this.todoService.todo$.subscribe((response:TodoItems[]) => {
      console.log('aaaa:',response);
      this.todoList = response;
    });


    this.todoService.getTasks();
    
  }


    
}
