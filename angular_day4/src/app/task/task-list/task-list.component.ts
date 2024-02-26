import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  newTask: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}
