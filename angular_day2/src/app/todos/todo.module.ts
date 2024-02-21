import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent, TodoItemComponent],
})
export class TodosModule {}
