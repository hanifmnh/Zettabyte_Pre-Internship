import { Injectable } from '@angular/core';
import { PatientType } from '../interface/patient.interface';
import { BehaviorSubject } from 'rxjs';
import { patients } from '../data/patient.data';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patientsSubject: BehaviorSubject<PatientType[]> = new BehaviorSubject<
    PatientType[]
  >(patients);
  patients$ = this.patientsSubject.asObservable();

  constructor() {}

  getPatientById(id: string): PatientType | undefined {
    return this.patientsSubject.value.find((patient) => patient.id === id);
  }

  addPatient(newPatient: PatientType): void {
    const currentPatients = [...this.patientsSubject.value];
    currentPatients.unshift(newPatient);
    this.patientsSubject.next(currentPatients);
  }

  updatePatient(updatedPatient: PatientType): void {
    const currentPatients = [...this.patientsSubject.value];
    const index = currentPatients.findIndex(
      (patient) => patient.id === updatedPatient.id
    );
    if (index !== -1) {
      currentPatients[index] = updatedPatient;
      this.patientsSubject.next(currentPatients);
    }
  }

  deletePatient(id: string): void {
    const patientList = this.patientsSubject.getValue();
    const index = patientList.findIndex((patient) => patient.id === id);
    if (index !== -1) {
      patientList.splice(index, 1);
      this.patientsSubject.next(patientList);
    }
  }
}
