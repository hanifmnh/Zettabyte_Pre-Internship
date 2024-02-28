import { Component } from '@angular/core';
import { Games } from '../shared/interface/games.interface';
import { GamesService } from '../shared/service/games.service';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrl: './games-detail.component.scss',
})
export class GamesDetailComponent {
  selectedGame: Games | null = null;
  isInCart: boolean = false;

  constructor(
    private selectedGameService: GamesService,
    private cartService: GamesService
  ) {}

  ngOnInit(): void {
    this.selectedGameService.selectedGame$.subscribe((game) => {
      this.selectedGame = game;
      this.isInCart = game ? this.cartService.isInCart(game) : false;
    });
  }

  closeDetail(): void {
    this.selectedGameService.setSelectedGame(null);
  }

  addToCart(game: Games): void {
    this.cartService.addToCart(game);
    this.isInCart = true;
  }
}
