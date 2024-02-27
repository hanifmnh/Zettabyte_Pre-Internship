import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/interface/movie.interface';
import { MovieService } from '../../shared/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  watchlist: Movie[] = [];

  constructor(private watchlistService: MovieService) {}

  addToWatchlist(movie: Movie) {
    if (!this.isInWatchlist(movie)) {
      this.watchlistService.addToWatchlist(movie);
    }
  }

  isInWatchlist(movie: Movie): boolean {
    return this.watchlistService.isInWatchlist(movie);
  }
}
