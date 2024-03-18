import { Component, OnInit } from '@angular/core';
import { PatientType } from '../shared/interface/patient.interface';
import { PatientService } from '../shared/service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  patients: PatientType[] = [];

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.patients$.subscribe((data: PatientType[]) => {
      this.patients = data;
    });
  }

  goToForm(): void {
    this.router.navigate(['form/patient-form']);
  }
}
