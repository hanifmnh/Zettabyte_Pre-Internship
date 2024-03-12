import { Component, Input } from '@angular/core';
import { TeamType } from '../../shared/interface/team.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss',
})
export class TeamListComponent {
  @Input() teamsData: TeamType = {
    id: '',
    fullname: '',
    nickname: '',
    email: '',
    contact: '',
    imageUrl: '',
    achievements: [{ achievement: '' }],
  };

  constructor(private router: Router) {}

  goToDetail(teamId: string): void {
    this.router.navigate(['team/team-detail', teamId]);
  }
}
