import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/interface/hero.interface';
import { HeroService } from '../shared/service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrl: './hero-home.component.scss',
})
export class HeroHomeComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.heroes$.subscribe((data: Hero[]) => {
      this.heroes = data;
    });
  }

  goToHeroForm(): void {
    this.router.navigate(['/hero-form']);
  }
}
