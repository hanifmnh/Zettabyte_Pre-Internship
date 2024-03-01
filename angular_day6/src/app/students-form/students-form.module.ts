import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentsFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [StudentsFormComponent],
})
export class StudentsFormModule {}
