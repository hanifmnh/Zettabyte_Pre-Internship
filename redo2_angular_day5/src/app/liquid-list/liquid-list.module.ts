import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidListComponent } from './liquid-list.component';
import { LiquidItemsComponent } from './liquid-items/liquid-items.component';

@NgModule({
  declarations: [LiquidListComponent, LiquidItemsComponent],
  imports: [CommonModule],
  exports: [LiquidListComponent, LiquidItemsComponent],
})
export class LiquidListModule {}
