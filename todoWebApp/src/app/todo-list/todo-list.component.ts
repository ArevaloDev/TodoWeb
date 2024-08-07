import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchTodoComponent } from '../shared/search-todo/search-todo.component';
import { TodoService } from '../services/todo.service';
import { TodoItems, UpdateTodo } from '../interfaces/todo.interface';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NavbarComponent,
    SearchTodoComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  public todoList: TodoItems[] = [];
  public form: FormGroup;
  public isCompleted: boolean = true;
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.form = this.fb.group({
      isCompleted: [''],
    });
  }

  ngOnInit(): void {
    this.todoService.todo$.subscribe((response: TodoItems[]) => {
      response = response.filter((item) => item.isCompleted !== true);
      this.todoList = response;
      console.log('aaaa:', this.todoList);
    });
    this.todoService.getTasks();
  }

  updateTodo = (id: number | undefined, isCompleted: boolean) => {
    console.log('update:', this.form.get('isCompleted')?.value);
    const value = Boolean(this.form.get('isCompleted')?.value);
    const todo = this.todoList.find((item) => item.id === id);
      console.log('valor', value);
      const body: UpdateTodo = {
      isCompleted: value,
    }
    console.log(body);
    this.todoService.updateTodo(id, body);
    //const value = this.isCompleted;
  };
}
