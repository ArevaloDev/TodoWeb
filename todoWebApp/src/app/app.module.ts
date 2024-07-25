import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";



@NgModule({
    declarations:[TodoListComponent],
    imports:[BrowserModule, AppRoutingModule],
})


export class AppModule{}