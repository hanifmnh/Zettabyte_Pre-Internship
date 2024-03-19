import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GamesDetailComponent } from './games-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'games-detail/:id', component: GamesDetailComponent },
];

@NgModule({
  declarations: [GamesDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
  exports: [GamesDetailComponent],
})
export class GamesDetailModule {}
