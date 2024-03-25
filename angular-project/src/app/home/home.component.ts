import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorFormComponent } from '../mentor-form/mentor-form.component';
import { MentorType } from '../shared/interface/mentor.interface';
import { MentorService } from '../shared/service/mentor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mentors: MentorType[] = [];

  constructor(
    private mentorService: MentorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mentorService.mentor$.subscribe((data: MentorType[]) => {
      this.mentors = data;
    });
  }

  openAddMentor() {
    this.dialog.open(MentorFormComponent, {
      disableClose: true,
    });
  }
}
