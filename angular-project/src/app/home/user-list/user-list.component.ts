import { Component, Input } from '@angular/core';
import { UserType } from '../../shared/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Input() userData: UserType = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  constructor(private router: Router) {}

  goToDetail(id: number) {
    if (id > 10) {
      id = 15;
    }
    this.router.navigate(['user/user-detail', id]);
  }
}
