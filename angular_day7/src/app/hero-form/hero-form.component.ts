import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../shared/interface/hero.interface';
import { HeroService } from '../shared/service/hero.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent implements OnInit {
  newHero: Hero = {
    id: '',
    name: '',
    role: '',
    lane: '',
    damageType: '',
    speciality: '',
    description: '',
    imageUrl: '',
  };

  isNewHero: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const heroId = params['id'];
      if (heroId) {
        const hero = this.heroService.getHeroById(heroId);
        if (hero) {
          this.newHero = { ...hero };
          this.isNewHero = false;
        }
      }
    });
  }

  onSubmit() {
    if (!this.newHero.id) {
      this.newHero.id = uuidv4();
      this.heroService.addNewHero(this.newHero);
      this.router.navigate(['/home']);
    } else {
      this.heroService.updateHero(this.newHero);
      this.router.navigate(['/hero-detail', this.newHero.id]);
    }
  }

  cancelForm(): void {
    if (this.isNewHero) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/hero-detail', this.newHero.id]);
    }
  }

  isFormInvalid(): boolean {
    return (
      !this.newHero.name ||
      !this.newHero.role ||
      !this.newHero.lane ||
      !this.newHero.damageType ||
      !this.newHero.speciality ||
      !this.newHero.description ||
      !this.newHero.imageUrl
    );
  }
}
