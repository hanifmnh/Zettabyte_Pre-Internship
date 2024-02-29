import { Component } from '@angular/core';
import { Liquid } from '../shared/interface/liquid.interface';
import { LiquidService } from '../shared/service/liquid.service';

@Component({
  selector: 'app-liquid-detail',
  templateUrl: './liquid-detail.component.html',
  styleUrl: './liquid-detail.component.scss',
})
export class LiquidDetailComponent {
  selectedLiquid: Liquid | null = null;

  constructor(
    private selectedLiquidService: LiquidService,
    private cartService: LiquidService
  ) {}

  ngOnInit(): void {
    this.selectedLiquidService.selectedLiquid$.subscribe((product) => {
      this.selectedLiquid = product;
    });
  }

  closeDetail(): void {
    this.selectedLiquidService.setSelectedLiquid(null);
  }

  addLiquidToCart(product: Liquid): void {
    this.cartService.addToCart(product);
  }
}
