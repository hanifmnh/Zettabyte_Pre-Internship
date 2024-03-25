import { Component, Input } from '@angular/core';
import { MentorType } from '../../shared/interface/mentor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrl: './mentor-card.component.scss',
})
export class MentorCardComponent {
  @Input() mentorData: MentorType;

  constructor(private router: Router) {}

  goToDetailMentor(id: string) {
    this.router.navigate(['mentor/mentor-detail', id]);
  }
}
