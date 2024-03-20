import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    UserListComponent
  ]
})
export class HomeModule { }
