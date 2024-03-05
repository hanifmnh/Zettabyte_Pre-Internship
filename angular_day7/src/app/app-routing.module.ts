import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { PageNotFoundComponent } from './hero-home/page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-home/hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeroHomeComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'hero-form/edit/:id', component: HeroFormComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
