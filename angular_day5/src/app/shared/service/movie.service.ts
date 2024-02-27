import { Injectable } from '@angular/core';
import { Movie } from '../../shared/interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private watchlist: Movie[] = [];

  constructor() {}

  addToWatchlist(movie: Movie) {
    this.watchlist.push(movie);
  }

  removeFromWatchlist(movie: Movie) {
    const index = this.watchlist.findIndex((item) => item === movie);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }

  isInWatchlist(movie: Movie): boolean {
    return this.watchlist.some((item) => item === movie);
  }

  getWatchlist() {
    return this.watchlist;
  }
}
