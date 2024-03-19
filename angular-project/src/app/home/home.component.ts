import { Component, OnInit } from '@angular/core';
import { GamesType } from '../shared/interface/games.interface';
import { GamesService } from '../shared/service/games.service';
import { Router } from '@angular/router';
import { RemoveAccentsPipe } from '../shared/pipe/remove-accents/remove-accents.pipe';
import { CombineWordsPipe } from '../shared/pipe/combine-words/combine-words.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [RemoveAccentsPipe, CombineWordsPipe],
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  games: GamesType[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router,
    private gamesService: GamesService,
    private accentsPipe: RemoveAccentsPipe,
    private combinePipe: CombineWordsPipe
  ) {}

  ngOnInit(): void {
    this.gamesService.games$.subscribe((data: GamesType[]) => {
      this.games = data;
    });
  }

  get filteredGames(): GamesType[] {
    return this.games.filter((game) =>
      this.combinePipe
        .transform(this.accentsPipe.transform(game.name))
        .includes(
          this.combinePipe.transform(
            this.accentsPipe.transform(this.searchTerm)
          )
        )
    );
  }

  goToForm(): void {
    this.router.navigate(['form/games-form']);
  }
}
