import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list.component';
import { GamesCardComponent } from '../games-list/games-card/games-card.component';

@NgModule({
  declarations: [GamesListComponent, GamesCardComponent],
  imports: [CommonModule],
  exports: [GamesListComponent, GamesCardComponent],
})
export class GamesListModule {}
