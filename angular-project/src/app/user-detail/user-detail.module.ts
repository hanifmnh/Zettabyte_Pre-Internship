import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-detail/:id', component: UserDetailComponent },
];

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
