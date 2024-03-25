import { Component, OnInit } from '@angular/core';
import { MentorType } from '../shared/interface/mentor.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MentorService } from '../shared/service/mentor.service';
import { MatDialog } from '@angular/material/dialog';
import { MentorFormComponent } from '../mentor-form/mentor-form.component';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrl: './mentor-detail.component.scss',
})
export class MentorDetailComponent implements OnInit {
  mentorId: string = '';
  selectedMentor: MentorType = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    civility: '',
    user_status: '',
    company: {
      name: '',
      user_type: '',
    },
    count_document: 0,
  };

  constructor(
    private router: Router,
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mentorId = this.route.snapshot.params['id'];
    if (this.mentorId) {
      const mentor = this.mentorService.getMentorById(this.mentorId);
      this.selectedMentor = mentor;
    }
  }

  goToEditMentor() {
    this.dialog.open(MentorFormComponent, {
      disableClose: true,
      data: { mentor: this.selectedMentor },
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
