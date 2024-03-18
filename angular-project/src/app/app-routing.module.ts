import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient-detail/patient-detail.module').then(
        (m) => m.PatientDetailModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./patient-form/patient-form.module').then(
        (m) => m.PatientFormModule
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
