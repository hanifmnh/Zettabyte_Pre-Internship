import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { GamesListModule } from './games-list/games-list.module';
import { GamesDetailModule } from './games-detail/games-detail.module';
import { GamesCartModule } from './games-cart/games-cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HeroModule,
    GamesListModule,
    GamesDetailModule,
    GamesCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
