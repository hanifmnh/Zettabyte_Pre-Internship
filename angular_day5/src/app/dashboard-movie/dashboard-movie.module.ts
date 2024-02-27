import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardMovieComponent } from './dashboard-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieListComponent, DashboardMovieComponent],
  imports: [CommonModule, FormsModule],
  exports: [MovieListComponent, DashboardMovieComponent],
})
export class DashboardMovieModule {}
