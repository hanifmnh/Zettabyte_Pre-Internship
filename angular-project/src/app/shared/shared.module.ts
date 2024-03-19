import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RemoveAccentsPipe } from './pipe/remove-accents/remove-accents.pipe';
import { CombineWordsPipe } from './pipe/combine-words/combine-words.pipe';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    RemoveAccentsPipe,
    CombineWordsPipe,
    NavbarComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [NotFoundComponent, NavbarComponent],
})
export class SharedModule {}
