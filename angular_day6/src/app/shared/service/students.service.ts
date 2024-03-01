import { Injectable } from '@angular/core';
import { Students } from '../interface/students.interface';
import { students } from '../data/students.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  studentsSubject: BehaviorSubject<Students[]> = new BehaviorSubject<
    Students[]
  >(students);
  students$ = this.studentsSubject.asObservable();

  selectedStudents: BehaviorSubject<Students | null> =
    new BehaviorSubject<Students | null>(null);
  selectedStudents$ = this.selectedStudents.asObservable();

  constructor() {}

  addStudent(student: Students): void {
    const currentStudents = [...this.studentsSubject.value];
    currentStudents.push(student);
    this.studentsSubject.next(currentStudents);
  }

  setSelectedStudents(student: Students | null): void {
    this.selectedStudents.next(student);
  }

  deleteStudent(studentId: number): void {
    const index = this.studentsSubject.value.findIndex(
      (student) => student.id === studentId
    );
    if (index !== -1) {
      const updatedStudents = [...this.studentsSubject.value];
      updatedStudents.splice(index, 1);
      this.studentsSubject.next(updatedStudents);
      this.setSelectedStudents(null);
    }
  }
}
