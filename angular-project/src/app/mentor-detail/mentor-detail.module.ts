import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorDetailComponent } from './mentor-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'mentor-detail/:id', component: MentorDetailComponent },
];

@NgModule({
  declarations: [MentorDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [MentorDetailComponent],
})
export class MentorDetailModule {}
