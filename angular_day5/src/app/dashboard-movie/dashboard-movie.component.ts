import { Component } from '@angular/core';
import { Movie } from '../shared/interface/movie.interface';

@Component({
  selector: 'app-dashboard-movie',
  templateUrl: './dashboard-movie.component.html',
  styleUrl: './dashboard-movie.component.scss',
})
export class DashboardMovieComponent {
  movies: Movie[] = [
    {
      title: 'Your Name.',
      release_date: 2016,
      rating: 8.8,
      duration: '1h 46m',
      genre: 'Drama, Supernatural',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1823/127994.jpg',
    },
    {
      title: 'Weathering with You',
      release_date: 2019,
      rating: 8.2,
      duration: '1h 52m',
      genre: 'Drama, Fantasy, Romance',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1880/101146.jpg',
    },
    {
      title: 'Suzume',
      release_date: 2022,
      rating: 8.3,
      duration: '2h 1m',
      genre: 'Adventure, Fantasy',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1598/128450l.jpg',
    },
    {
      title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
      release_date: 2020,
      rating: 8.5,
      duration: '1h 56m',
      genre: 'Action, Fantasy',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1704/106947.jpg',
    },
    {
      title: 'Boruto: Naruto the Movie',
      release_date: 2015,
      rating: 7.3,
      duration: '1h 35m',
      genre: 'Action, Adventure, Fantasy',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1014/134499l.jpg',
    },
    {
      title: "Kuroko's Basketball the Movie: Last Game",
      release_date: 2017,
      rating: 8.0,
      duration: '1h 30m',
      genre: 'Sports',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/2/83106l.jpg',
    },
    {
      title: 'Jujutsu Kaisen 0',
      release_date: 2021,
      rating: 8.4,
      duration: '1h 44m',
      genre: 'Action, Fantasy',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1121/119044l.jpg',
    },
    {
      title: 'Violet Evergarden: The Movie',
      release_date: 2020,
      rating: 8.8,
      duration: '2h 20m',
      genre: 'Drama, Fantasy',
      imgUrl: 'https://cdn.myanimelist.net/images/anime/1825/110716l.jpg',
    },
  ];
}
