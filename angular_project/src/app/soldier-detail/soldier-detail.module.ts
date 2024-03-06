import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldierDetailComponent } from './soldier-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'soldier-detail/:id', component: SoldierDetailComponent },
];

@NgModule({
  declarations: [SoldierDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SoldierDetailComponent],
})
export class SoldierDetailModule {}
