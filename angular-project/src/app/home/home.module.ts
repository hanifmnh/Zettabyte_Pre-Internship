import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [HomeComponent, PatientListComponent],
  imports: [CommonModule],
  exports: [HomeComponent, PatientListComponent],
})
export class HomeModule {}
