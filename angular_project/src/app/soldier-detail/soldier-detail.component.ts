import { Component, OnInit } from '@angular/core';
import { SoldierType } from '../shared/interface/soldier.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SoldierService } from '../shared/service/soldier.service';

@Component({
  selector: 'app-soldier-detail',
  templateUrl: './soldier-detail.component.html',
  styleUrl: './soldier-detail.component.scss',
})
export class SoldierDetailComponent implements OnInit {
  soldier: SoldierType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private soldierService: SoldierService
  ) {}

  ngOnInit(): void {
    const soldierId = this.route.snapshot.params['id'];
    this.soldier = this.soldierService.getSoldierById(soldierId);
  }

  onEditSoldier(): void {
    if (this.soldier) {
      this.router.navigate(['/form/soldier-form/edit'], {
        queryParams: { id: this.soldier.id },
      });
    }
  }

  onDeleteSoldier(): void {
    if (this.soldier) {
      this.soldierService.deleteSoldier(this.soldier.id);
      this.router.navigate(['/home']);
    }
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
