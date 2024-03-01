import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentsItemsComponent } from './students-items/students-items.component';

@NgModule({
  declarations: [StudentsListComponent, StudentsItemsComponent],
  imports: [CommonModule],
  exports: [StudentsListComponent, StudentsItemsComponent],
})
export class StudentsListModule {}
