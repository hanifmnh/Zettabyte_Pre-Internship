import { Component, OnInit } from '@angular/core';
import { TeamType } from '../shared/interface/team.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/service/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss',
})
export class TeamDetailComponent implements OnInit {
  team: TeamType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.params['id'];
    this.team = this.teamService.getTeamById(teamId);
  }

  onEditTeam(): void {
    if (this.team) {
      this.router.navigate(['/form/team-form/edit'], {
        queryParams: { id: this.team.id },
      });
    }
  }

  onDeleteTeam(): void {
    Swal.fire({
      title: `Are you sure want to delete ${this.team?.fullname}?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.team) {
          this.teamService.deleteTeam(this.team.id);
          Swal.fire({
            title: 'Deleted!',
            text: `${this.team?.fullname} has been deleted.`,
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
