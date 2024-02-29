import { Component } from '@angular/core';
import { Liquid } from './shared/interface/liquid.interface';
import { LiquidService } from './shared/service/liquid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'redo2_angular_day5';

  selectedLiquid: Liquid | null = null;

  constructor(private selectedLiquidService: LiquidService) {}

  ngOnInit(): void {
    this.selectedLiquidService.selectedLiquid$.subscribe((product) => {
      this.selectedLiquid = product;
    });
  }
}
