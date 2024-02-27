import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchlistMovieComponent } from './watchlist-movie.component';

@NgModule({
  declarations: [WatchlistMovieComponent],
  imports: [CommonModule, FormsModule],
  exports: [WatchlistMovieComponent],
})
export class WatchlistMovieModule {}
