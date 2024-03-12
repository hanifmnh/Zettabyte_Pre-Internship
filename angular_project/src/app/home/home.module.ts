import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TeamListComponent } from './team-list/team-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    TeamListComponent
  ]
})
export class HomeModule { }
