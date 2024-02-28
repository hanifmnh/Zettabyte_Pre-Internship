import { Injectable } from '@angular/core';
import { Games } from '../interface/games.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Games[] = [
    {
      name: 'NBA 2K24',
      genre: 'Sports',
      release_date: '7 Sep 2023',
      publisher: '2K',
      description:
        'Experience hoops culture in NBA 2K24. Enjoy loads of action and limitless personalized MyPLAYER options in MyCAREER. Build your perfect lineup in MyTEAM. Feel more responsive gameplay and polished visuals while playing with your favorite NBA and WNBA teams in PLAY NOW.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg?t=1708722504',
      price: 105440,
    },
    {
      name: 'EA SPORTS FC™ 24',
      genre: 'Sports',
      release_date: '28 Sep 2023',
      publisher: 'Electronic Arts',
      description:
        'EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimised by Opta, and an enhanced Frostbite™ Engine.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg?t=1708558281',
      price: 759000,
    },
    {
      name: 'eFootball™ 2024',
      genre: 'Sports',
      release_date: '30 Sep 2021',
      publisher: 'KONAMI',
      description:
        'The classic action soccer game with the most up-to-date data! Enjoy the fever pitch of ""real soccer"" in eFootball™ 2024!',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1665460/header.jpg?t=1706766938',
      price: 0,
    },
    {
      name: 'Apex Legends™',
      genre: 'Battle Royale',
      release_date: '5 Nov 2020',
      publisher: 'Electronic Arts',
      description:
        'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1708706824',
      price: 0,
    },
    {
      name: 'Dota 2',
      genre: 'MOBA',
      release_date: '10 Jul 2013',
      publisher: 'Valve',
      description:
        "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1707435904',
      price: 0,
    },
    {
      name: 'Palworld',
      genre: 'Survival',
      release_date: '19 Jan 2024',
      publisher: 'Pocketpair',
      description:
        'Fight, farm, build and work alongside mysterious creatures called "Pals" in this completely new multiplayer, open world survival and crafting game!',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg?t=1707904340',
      price: 245999,
    },
    {
      name: 'ELDEN RING',
      genre: 'Souls-like',
      release_date: '25 Feb 2022',
      publisher: 'FromSoftware Inc.',
      description:
        'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1708579497',
      price: 599000,
    },
    {
      name: 'Lethal Company',
      genre: 'Online Co-Op',
      release_date: '24 Oct 2023',
      publisher: 'Zeekerss',
      description:
        'A co-op horror about scavenging at abandoned moons to sell scrap to the Company.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg?t=1700231592',
      price: 90999,
    },
    {
      name: 'TEKKEN 8',
      genre: 'Fighting',
      release_date: '26 Jan 2024',
      publisher: 'Bandai Namco Entertainment',
      description:
        'Get ready for the next chapter in the legendary fighting game franchise, TEKKEN 8.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg?t=1708570368',
      price: 699000,
    },
    {
      name: 'Mortal Kombat 1',
      genre: 'Fighting',
      release_date: '19 Sep 2023',
      publisher: 'Warner Bros. Games',
      description:
        'Discover a reborn Mortal Kombat™ Universe created by the Fire God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg?t=1702393935',
      price: 849000,
    },
    {
      name: 'Grand Theft Auto V',
      genre: 'Open World',
      release_date: '14 Apr 2015',
      publisher: 'Rockstar Games',
      description:
        'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1706131787',
      price: 260700,
    },
    {
      name: 'WWE 2K23',
      genre: 'Sports',
      release_date: '16 Mar 2023',
      publisher: '2K',
      description:
        'WWE 2K23 is Even Stronger with expanded features, gorgeous graphics and a deep roster of WWE Superstars and Legends. 2K Showcase returns as an interactive sports documentary focusing on the 20-year career of John Cena and WarGames is finally here!',
      imgUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/1942660/header.jpg?t=1702580766',
      price: 649000,
    },
  ];

  private selectedGameSubject = new BehaviorSubject<Games | null>(null);
  selectedGame$ = this.selectedGameSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<Games[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getGames(): Games[] {
    return this.games;
  }

  setSelectedGame(game: Games | null): void {
    this.selectedGameSubject.next(game);
  }

  addToCart(game: Games): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = [...currentItems, game];
    this.cartItemsSubject.next(updatedItems);
  }

  removeFromCart(game: Games): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((item) => item !== game);
    this.cartItemsSubject.next(updatedItems);
  }

  isInCart(game: Games): boolean {
    const currentItems = this.cartItemsSubject.getValue();
    return currentItems.some((item) => item === game);
  }
}
