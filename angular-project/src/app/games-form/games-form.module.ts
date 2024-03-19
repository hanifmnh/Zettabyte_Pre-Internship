import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GamesFormComponent } from './games-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'games-form', component: GamesFormComponent },
  { path: 'games-form/edit', component: GamesFormComponent },
];

@NgModule({
  declarations: [GamesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  exports: [GamesFormComponent],
})
export class GamesFormModule {}
