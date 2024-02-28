import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesCartComponent } from './games-cart.component';

@NgModule({
  declarations: [GamesCartComponent],
  imports: [CommonModule],
  exports: [GamesCartComponent],
})
export class GamesCartModule {}
