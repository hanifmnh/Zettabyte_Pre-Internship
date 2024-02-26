import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() taskItem: string = '';
  @Output() taskDeleted = new EventEmitter<string>();

  ngOnInit() {
    alert(`${this.taskItem} Task Added!`);
  }

  ngOnDestroy() {
    alert(`${this.taskItem} Task Removed!`);
  }

  deleteTask() {
    this.taskDeleted.emit(this.taskItem);
  }

  elapsedTime: number = 0;
  timer: any;
  isRunning: boolean = false;

  onStartStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.elapsedTime++;
      }, 1000);
    }
  }

  onStopStopwatch() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(
      remainingSeconds
    )}`;
  }

  pad(val: number): string {
    return val < 10 ? `0${val}` : val.toString();
  }
}
