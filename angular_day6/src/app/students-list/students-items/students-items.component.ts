import { Component, Input } from '@angular/core';
import { Students } from '../../shared/interface/students.interface';
import { StudentsService } from '../../shared/service/students.service';

@Component({
  selector: 'app-students-items',
  templateUrl: './students-items.component.html',
  styleUrl: './students-items.component.scss',
})
export class StudentsItemsComponent {
  @Input() student: Students[] = [];

  constructor(private selectedStudentsService: StudentsService) {}

  selectStudents(student: Students): void {
    this.selectedStudentsService.setSelectedStudents(student);
  }
}
