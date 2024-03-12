import { Injectable } from '@angular/core';
import { TeamType } from '../interface/team.interface';
import { teams } from '../data/team.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamsSubject: BehaviorSubject<TeamType[]> = new BehaviorSubject<TeamType[]>(
    teams
  );
  teams$ = this.teamsSubject.asObservable();

  constructor() {}

  getTeamById(id: string): TeamType | undefined {
    return this.teamsSubject.value.find((team) => team.id === id);
  }

  addTeam(newTeam: TeamType): void {
    const currentTeams = [...this.teamsSubject.value];
    currentTeams.unshift(newTeam);
    this.teamsSubject.next(currentTeams);
  }

  updateTeam(updatedTeam: TeamType): void {
    const currentTeams = [...this.teamsSubject.value];
    const index = currentTeams.findIndex((team) => team.id === updatedTeam.id);
    if (index !== -1) {
      currentTeams[index] = updatedTeam;
      this.teamsSubject.next(currentTeams);
    }
  }

  deleteTeam(id: string): void {
    const teamList = this.teamsSubject.getValue();
    const index = teamList.findIndex((team) => team.id === id);
    if (index !== -1) {
      teamList.splice(index, 1);
      this.teamsSubject.next(teamList);
    }
  }
}
