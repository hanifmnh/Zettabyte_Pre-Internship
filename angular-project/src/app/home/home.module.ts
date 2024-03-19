import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { GamesListComponent } from './games-list/games-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, GamesListComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [HomeComponent, GamesListComponent],
})
export class HomeModule {}
