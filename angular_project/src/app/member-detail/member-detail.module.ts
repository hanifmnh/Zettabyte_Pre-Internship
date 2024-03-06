import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'member-detail/:id', component: MemberDetailComponent },
];

@NgModule({
  declarations: [MemberDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MemberDetailComponent],
})
export class MemberDetailModule {}
