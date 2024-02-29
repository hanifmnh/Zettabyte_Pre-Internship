import { Component, Input } from '@angular/core';
import { Liquid } from '../../shared/interface/liquid.interface';
import { LiquidService } from '../../shared/service/liquid.service';

@Component({
  selector: 'app-liquid-items',
  templateUrl: './liquid-items.component.html',
  styleUrl: './liquid-items.component.scss',
})
export class LiquidItemsComponent {
  @Input() liquids: Liquid[] = [];

  constructor(private selectedLiquidService: LiquidService) {}

  selectLiquid(product: Liquid): void {
    this.selectedLiquidService.setSelectedLiquid(product);
  }
}
