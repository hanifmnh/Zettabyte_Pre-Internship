import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'patient-form', component: PatientFormComponent },
  { path: 'patient-form/edit', component: PatientFormComponent },
];

@NgModule({
  declarations: [PatientFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [PatientFormComponent],
})
export class PatientFormModule {}
