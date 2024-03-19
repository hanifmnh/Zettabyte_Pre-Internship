export interface GamesGenreType {
  genre: string;
}

export interface GamesType {
  id: string;
  name: string;
  publisher: string;
  description: string;
  imgUrl: string;
  price: string;
  genres: GamesGenreType[];
}
