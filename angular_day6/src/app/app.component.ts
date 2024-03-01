import { Component } from '@angular/core';
import { Students } from './shared/interface/students.interface';
import { StudentsService } from './shared/service/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_day6';

  selectedStudents: Students | null = null;
  isFormVisible: boolean = false;

  constructor(private selectedStudentsService: StudentsService) {}

  ngOnInit(): void {
    this.selectedStudentsService.selectedStudents$.subscribe((student) => {
      this.selectedStudents = student;
    });
  }

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}
