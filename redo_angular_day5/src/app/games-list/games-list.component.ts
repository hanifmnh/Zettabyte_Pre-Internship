import { Component } from '@angular/core';
import { Games } from '../shared/interface/games.interface';
import { GamesService } from '../shared/service/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  games: Games[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
}
