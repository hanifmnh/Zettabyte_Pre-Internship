import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDetailComponent } from './students-detail.component';



@NgModule({
  declarations: [
    StudentsDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsDetailComponent
  ]
})
export class StudentsDetailModule { }
