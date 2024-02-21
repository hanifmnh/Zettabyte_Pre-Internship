import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: any[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodoItem = {
        title: this.newTodo,
      };
      this.todos.push(newTodoItem);
      this.newTodo = '';
    }
  }

  deleteTodo(todoToDelete: any) {
    this.todos = this.todos.filter((todo) => todo !== todoToDelete);
  }
}
