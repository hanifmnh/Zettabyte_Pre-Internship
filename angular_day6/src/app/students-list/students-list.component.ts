import { Component } from '@angular/core';
import { Students } from '../shared/interface/students.interface';
import { StudentsService } from '../shared/service/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  students: Students[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.students$.subscribe((data: Students[]) => {
      this.students = data;
    });
  }
}
