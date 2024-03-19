import { Component, OnInit } from '@angular/core';
import { GamesType } from '../shared/interface/games.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/service/games.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrl: './games-detail.component.scss',
})
export class GamesDetailComponent implements OnInit {
  games: GamesType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    const gamesId = this.route.snapshot.params['id'];
    this.games = this.gamesService.getGamesById(gamesId);
  }

  onEditGames(): void {
    if (this.games) {
      this.router.navigate(['/form/games-form/edit'], {
        queryParams: { id: this.games.id },
      });
    }
  }

  onDeleteGames(): void {
    Swal.fire({
      title: `Are you sure want to delete ${this.games?.name}?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.games) {
          this.gamesService.deleteGames(this.games.id);
          Swal.fire({
            title: 'Deleted!',
            text: `${this.games?.name} has been deleted.`,
            icon: 'success',
          });
          this.router.navigate(['/home']);
        }
      }
    });
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
