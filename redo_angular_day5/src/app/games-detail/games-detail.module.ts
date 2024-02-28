import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesDetailComponent } from './games-detail.component';



@NgModule({
  declarations: [
    GamesDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamesDetailComponent
  ]
})
export class GamesDetailModule { }
