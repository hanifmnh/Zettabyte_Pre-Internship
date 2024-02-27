import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMovieModule } from './dashboard-movie/dashboard-movie.module';
import { WatchlistMovieModule } from './watchlist-movie/watchlist-movie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    DashboardMovieModule,
    WatchlistMovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
