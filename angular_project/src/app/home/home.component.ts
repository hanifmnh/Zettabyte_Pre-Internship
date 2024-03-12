import { Component, OnInit } from '@angular/core';
import { TeamType } from '../shared/interface/team.interface';
import { TeamService } from '../shared/service/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  teams: TeamType[] = [];

  constructor(private router: Router, private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teams$.subscribe((data: TeamType[]) => {
      this.teams = data;
    });
  }

  goToForm(): void {
    this.router.navigate(['form/team-form']);
  }
}
