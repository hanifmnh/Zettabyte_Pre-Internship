import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamFormComponent } from './team-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'team-form', component: TeamFormComponent },
  { path: 'team-form/edit', component: TeamFormComponent },
];

@NgModule({
  declarations: [TeamFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [TeamFormComponent],
})
export class TeamFormModule {}
