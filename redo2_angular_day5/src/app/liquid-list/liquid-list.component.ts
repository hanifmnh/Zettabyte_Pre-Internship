import { Component } from '@angular/core';
import { Liquid } from '../shared/interface/liquid.interface';
import { LiquidService } from '../shared/service/liquid.service';

@Component({
  selector: 'app-liquid-list',
  templateUrl: './liquid-list.component.html',
  styleUrl: './liquid-list.component.scss',
})
export class LiquidListComponent {
  liquid: Liquid[] = [];

  constructor(private liquidService: LiquidService) {}

  ngOnInit(): void {
    this.liquidService.liquid$.subscribe((product) => {
      this.liquid = product;
    });
    this.liquidService.getLiquid();
  }
}
