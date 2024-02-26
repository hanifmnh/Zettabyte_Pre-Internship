import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskComponent, TaskItemComponent, TaskListComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskComponent, TaskItemComponent, TaskListComponent],
})
export class TaskModule {}
