import { Component, Input } from '@angular/core';
import { GamesType } from '../../shared/interface/games.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  @Input() gameData: GamesType = {
    id: '',
    name: '',
    publisher: '',
    description: '',
    imgUrl: '',
    price: '',
    genres: [{ genre: '' }],
  };

  constructor(private router: Router) {}

  goToDetail(gamesId: string): void {
    this.router.navigate(['games/games-detail', gamesId]);
  }
}
