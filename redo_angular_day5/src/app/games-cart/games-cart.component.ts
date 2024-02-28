import { Component } from '@angular/core';
import { Games } from '../shared/interface/games.interface';
import { GamesService } from '../shared/service/games.service';

@Component({
  selector: 'app-games-cart',
  templateUrl: './games-cart.component.html',
  styleUrl: './games-cart.component.scss',
})
export class GamesCartComponent {
  cartItems: Games[] = [];

  constructor(private cartService: GamesService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(item: Games): void {
    this.cartService.removeFromCart(item);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
