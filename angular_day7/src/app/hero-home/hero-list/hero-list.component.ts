import { Component, Input } from '@angular/core';
import { Hero } from '../../shared/interface/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  @Input() heroesData: Hero = {
    id: '',
    name: '',
    role: '',
    lane: '',
    damageType: '',
    speciality: '',
    description: '',
    imageUrl: '',
  };

  constructor(private router: Router) {}

  goToDetail(heroId: string): void {
    this.router.navigate(['/hero-detail', heroId]);
  }
}
