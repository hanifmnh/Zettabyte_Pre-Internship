import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-form/edit', component: UserFormComponent },
];

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [UserFormComponent],
})
export class UserFormModule {}
