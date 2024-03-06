import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldierFormComponent } from './soldier-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'soldier-form', component: SoldierFormComponent },
  { path: 'soldier-form/edit', component: SoldierFormComponent },
];

@NgModule({
  declarations: [SoldierFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [SoldierFormComponent],
})
export class SoldierFormModule {}
