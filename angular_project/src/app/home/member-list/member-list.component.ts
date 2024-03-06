import { Component, Input } from '@angular/core';
import { MemberType } from '../../shared/interface/member.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss',
})
export class MemberListComponent {
  @Input() membersData: MemberType = {
    id: '',
    fullname: '',
    nickname: '',
    age: 0,
    role: '',
    email: '',
    instagram: '',
    imageUrl: '',
    addresses: {
      address: '',
      zipcode: 0,
      city: '',
      country: '',
    },
  };

  constructor(private router: Router) {}

  goToDetail(memberId: string): void {
    this.router.navigate(['member/member-detail', memberId]);
  }
}
