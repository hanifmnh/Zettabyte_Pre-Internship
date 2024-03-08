import { Component, Input } from '@angular/core';
import { SoldierType } from '../../shared/interface/soldier.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soldier-list',
  templateUrl: './soldier-list.component.html',
  styleUrl: './soldier-list.component.scss',
})
export class SoldierListComponent {
  @Input() soldiersData: SoldierType = {
    id: '',
    name: '',
    age: 0,
    gender: '',
    email: '',
    rank: '',
    maritalStatus: '',
    imageUrl: '',
    addresses: [
      {
        address: '',
        zipcode: 0,
        city: '',
        country: '',
      },
    ],
    emergencyContact: [
      {
        name: '',
        phoneNumber: '',
      },
    ],
  };

  constructor(private router: Router) {}

  goToDetail(soldierId: string): void {
    this.router.navigate(['soldier/soldier-detail', soldierId]);
  }
}
