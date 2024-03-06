import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SoldierListComponent } from './soldier-list/soldier-list.component';

@NgModule({
  declarations: [HomeComponent, SoldierListComponent],
  imports: [CommonModule],
  exports: [HomeComponent, SoldierListComponent],
})
export class HomeModule {}
