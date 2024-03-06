import { Component, OnInit } from '@angular/core';
import { SoldierType } from '../shared/interface/soldier.interface';
import { SoldierService } from '../shared/service/soldier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  soldiers: SoldierType[] = [];

  constructor(private router: Router, private soldierService: SoldierService) {}

  ngOnInit(): void {
    this.soldierService.soldiers$.subscribe((data: SoldierType[]) => {
      this.soldiers = data;
    });
  }

  goToForm(): void {
    this.router.navigate(['form/soldier-form']);
  }
}
