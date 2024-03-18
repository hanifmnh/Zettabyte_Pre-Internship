import { Component, Input } from '@angular/core';
import { PatientType } from '../../shared/interface/patient.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  @Input() patientsData: PatientType = {
    id: '',
    name: '',
    gender: '',
    age: '',
    address: '',
    contact: '',
    imageUrl: '',
    complaints: [{ complaint: '' }],
  };

  constructor(private router: Router) {}

  goToDetail(teamId: string): void {
    this.router.navigate(['patient/patient-detail', teamId]);
  }
}
