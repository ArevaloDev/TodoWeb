import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TodoItems } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-search-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-todo.component.html',
  styleUrl: './search-todo.component.css'
})
export class SearchTodoComponent {

  
  public taskValue:string = '';
  
  constructor(
    private todoService:TodoService
  ){}

  sendValueTask = () => {
    console.log('value:', this.taskValue);
    const data:TodoItems = {
      name: this.taskValue,
      isCompleted:false
    }
    this.taskValue = '';
    this.todoService.SendTasks(data);
  }

}
