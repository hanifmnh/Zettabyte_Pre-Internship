import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'member',
    loadChildren: () =>
      import('./member-detail/member-detail.module').then(
        (m) => m.MemberDetailModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./member-form/member-form.module').then(
        (m) => m.MemberFormModule
      ),
  },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
