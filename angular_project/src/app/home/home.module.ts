import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  declarations: [HomeComponent, MemberListComponent],
  imports: [CommonModule],
  exports: [HomeComponent, MemberListComponent],
})
export class HomeModule {}
