import { Component } from '@angular/core';
import { Students } from '../shared/interface/students.interface';
import { StudentsService } from '../shared/service/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.scss',
})
export class StudentsFormComponent {
  newStudent: Students = {
    id: 0,
    name: '',
    dateOfBirth: '',
    major: '',
    address: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
  };

  constructor(private studentsService: StudentsService) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.newStudent.id = Math.floor(Math.random() * 100000000);
      this.studentsService.addStudent(this.newStudent);
      this.resetForm();
    } else {
      alert('All inputs must be filled in');
    }
  }

  isFormValid(): boolean {
    return (
      this.newStudent.name.trim() !== '' &&
      this.newStudent.dateOfBirth.trim() !== '' &&
      this.newStudent.major.trim() !== '' &&
      this.newStudent.address.trim() !== '' &&
      this.newStudent.email.trim() !== '' &&
      this.newStudent.phoneNumber.trim() !== '' &&
      this.newStudent.imageUrl.trim() !== ''
    );
  }

  resetForm(): void {
    this.newStudent = {
      id: 0,
      name: '',
      dateOfBirth: '',
      major: '',
      address: '',
      email: '',
      phoneNumber: '',
      imageUrl: '',
    };
  }
}
