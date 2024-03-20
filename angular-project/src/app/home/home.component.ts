import { Component, OnInit } from '@angular/core';
import { UserType } from '../shared/interface/user.interface';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  users: UserType[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users$.subscribe((data: UserType[]) => {
      this.users = data;
    });
  }

  goToForm(): void {
    this.router.navigate(['form/user-form']);
  }
}
