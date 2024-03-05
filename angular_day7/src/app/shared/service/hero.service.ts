import { Injectable } from '@angular/core';
import { Hero } from '../interface/hero.interface';
import { heroes } from '../data/hero.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroesSubject: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(heroes);
  heroes$ = this.heroesSubject.asObservable();

  constructor() {}

  getHeroById(id: string): Hero | undefined {
    return this.heroesSubject.value.find((hero) => hero.id === id);
  }

  addNewHero(hero: Hero): void {
    const currentHeroes = [...this.heroesSubject.value];
    currentHeroes.push(hero);
    this.heroesSubject.next(currentHeroes);
  }

  updateHero(updatedHero: Hero): void {
    const updatedHeroes = this.heroesSubject.value.map((hero) => {
      if (hero.id === updatedHero.id) {
        return updatedHero;
      }
      return hero;
    });
    this.heroesSubject.next(updatedHeroes);
  }

  deleteHero(id: string): void {
    const index = this.heroesSubject
      .getValue()
      .findIndex((hero) => hero.id === id);
    if (index !== -1) {
      const deleteHeroes = [...this.heroesSubject.value];
      deleteHeroes.splice(index, 1);
      this.heroesSubject.next(deleteHeroes);
    }
  }
}
