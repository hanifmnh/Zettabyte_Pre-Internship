import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() deleteTodoItem = new EventEmitter<any>();

  isCompleted: boolean = false;

  deleteTodo() {
    this.deleteTodoItem.emit(this.todo);
  }

  toggleCompletedColor() {
    if (!this.isCompleted) {
      this.todo.backgroundColor = '#198754';
      this.todo.fontColor = 'white';
    } else {
      delete this.todo.backgroundColor;
      delete this.todo.fontColor;
    }
    this.isCompleted = !this.isCompleted;
  }
}
