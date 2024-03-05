import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/interface/hero.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../shared/service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const heroId = this.route.snapshot.params['id'];
    this.hero = this.heroService.getHeroById(heroId);
  }

  deleteHero(): void {
    if (this.hero) {
      this.heroService.deleteHero(this.hero.id);
      this.router.navigate(['/home']);
    }
  }

  goToEditForm(): void {
    if (this.hero) {
      this.router.navigate(['/hero-form/edit', this.hero.id]);
    }
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
