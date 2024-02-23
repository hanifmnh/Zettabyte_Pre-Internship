import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LightConeComponent } from './light-cone.component';
import { LightConeSearchComponent } from './light-cone-search/light-cone-search.component';
import { LightConeCardsComponent } from './light-cone-cards/light-cone-cards.component';

@NgModule({
  declarations: [
    LightConeComponent,
    LightConeSearchComponent,
    LightConeCardsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    LightConeComponent,
    LightConeSearchComponent,
    LightConeCardsComponent,
  ],
})
export class LightConeModule {}
