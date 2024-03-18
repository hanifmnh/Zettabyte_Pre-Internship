import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patient-detail/:id', component: PatientDetailComponent },
];

@NgModule({
  declarations: [PatientDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PatientDetailComponent],
})
export class PatientDetailModule {}
