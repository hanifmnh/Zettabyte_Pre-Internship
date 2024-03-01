import { Component } from '@angular/core';
import { Students } from '../shared/interface/students.interface';
import { StudentsService } from '../shared/service/students.service';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrl: './students-detail.component.scss',
})
export class StudentsDetailComponent {
  selectedStudents: Students | null = null;

  constructor(private selectedStudentsService: StudentsService) {}

  ngOnInit(): void {
    this.selectedStudentsService.selectedStudents$.subscribe((student) => {
      this.selectedStudents = student;
    });
  }

  closeDetail(): void {
    this.selectedStudentsService.setSelectedStudents(null);
  }

  deleteStudent(): void {
    if (this.selectedStudents) {
      this.selectedStudentsService.deleteStudent(this.selectedStudents.id);
      this.closeDetail();
    }
  }
}
