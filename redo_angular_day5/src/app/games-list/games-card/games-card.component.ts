import { Component, Input } from '@angular/core';
import { Games } from '../../shared/interface/games.interface';
import { GamesService } from '../../shared/service/games.service';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrl: './games-card.component.scss',
})
export class GamesCardComponent {
  @Input() gamesCard: Games[] = [];

  constructor(private selectedGameService: GamesService) {}

  selectGame(game: Games): void {
    this.selectedGameService.setSelectedGame(game);
  }
}
