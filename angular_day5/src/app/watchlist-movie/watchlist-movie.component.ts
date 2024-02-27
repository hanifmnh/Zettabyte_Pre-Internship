import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/service/movie.service';
import { Movie } from '../shared/interface/movie.interface';

@Component({
  selector: 'app-watchlist-movie',
  templateUrl: './watchlist-movie.component.html',
  styleUrl: './watchlist-movie.component.scss',
})
export class WatchlistMovieComponent implements OnInit {
  watchlist: Movie[] = [];

  constructor(private watchlistService: MovieService) {}

  ngOnInit(): void {
    this.watchlist = this.watchlistService.getWatchlist();
  }

  removeFromWatchlist(movie: Movie) {
    this.watchlistService.removeFromWatchlist(movie);
    this.watchlist = this.watchlistService.getWatchlist();
  }
}
