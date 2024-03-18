import { Component, OnInit } from '@angular/core';
import { PatientType } from '../shared/interface/patient.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../shared/service/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.scss',
})
export class PatientDetailComponent implements OnInit {
  patient: PatientType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.params['id'];
    this.patient = this.patientService.getPatientById(patientId);
  }

  onEditPatient(): void {
    if (this.patient) {
      this.router.navigate(['/form/patient-form/edit'], {
        queryParams: { id: this.patient.id },
      });
    }
  }

  onDeletePatient(): void {
    Swal.fire({
      title: `Are you sure want to delete ${this.patient?.name}?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.patient) {
          this.patientService.deletePatient(this.patient.id);
          Swal.fire({
            title: 'Deleted!',
            text: `${this.patient?.name} has been deleted.`,
            icon: 'success',
          });
          this.router.navigate(['/home']);
        }
      }
    });
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
