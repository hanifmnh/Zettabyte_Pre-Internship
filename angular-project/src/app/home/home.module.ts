import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorTableComponent } from './mentor-table/mentor-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MentorCardComponent } from './mentor-card/mentor-card.component';

@NgModule({
  declarations: [MentorTableComponent, HomeComponent, MentorCardComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [MentorTableComponent, HomeComponent, MentorCardComponent],
})
export class HomeModule {}
