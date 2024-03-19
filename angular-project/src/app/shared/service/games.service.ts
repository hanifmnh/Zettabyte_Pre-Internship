import { Injectable } from '@angular/core';
import { GamesType } from '../interface/games.interface';
import { games } from '../data/games.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  gamesSubject: BehaviorSubject<GamesType[]> = new BehaviorSubject<GamesType[]>(
    games
  );
  games$ = this.gamesSubject.asObservable();

  constructor() {}

  getGamesById(id: string): GamesType | undefined {
    return this.gamesSubject.value.find((game) => game.id === id);
  }

  addGames(newGames: GamesType): void {
    const currentGames = [...this.gamesSubject.value];
    currentGames.unshift(newGames);
    this.gamesSubject.next(currentGames);
  }

  updateGames(updatedGames: GamesType): void {
    const currentGames = [...this.gamesSubject.value];
    const index = currentGames.findIndex((game) => game.id === updatedGames.id);
    if (index !== -1) {
      currentGames[index] = updatedGames;
      this.gamesSubject.next(currentGames);
    }
  }

  deleteGames(id: string): void {
    const gamesList = this.gamesSubject.getValue();
    const index = gamesList.findIndex((game) => game.id === id);
    if (index !== -1) {
      gamesList.splice(index, 1);
      this.gamesSubject.next(gamesList);
    }
  }
}
