import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroHomeComponent } from './hero-home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroHomeComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeroHomeComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
  ],
})
export class HeroHomeModule {}
