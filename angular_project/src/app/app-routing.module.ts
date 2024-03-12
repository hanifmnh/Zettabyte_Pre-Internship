import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'team',
    loadChildren: () =>
      import('./team-detail/team-detail.module').then(
        (m) => m.TeamDetailModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./team-form/team-form.module').then((m) => m.TeamFormModule),
  },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
