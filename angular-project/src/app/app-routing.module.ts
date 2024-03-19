import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'games',
    loadChildren: () =>
      import('./games-detail/games-detail.module').then(
        (m) => m.GamesDetailModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./games-form/games-form.module').then((m) => m.GamesFormModule),
  },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
