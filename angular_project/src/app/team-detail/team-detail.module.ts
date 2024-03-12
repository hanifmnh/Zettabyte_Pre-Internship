import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'team-detail/:id', component: TeamDetailComponent },
];

@NgModule({
  declarations: [TeamDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [TeamDetailComponent],
})
export class TeamDetailModule {}
