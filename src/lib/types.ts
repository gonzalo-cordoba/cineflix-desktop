export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview?: any;
  videos?: any;
}

export interface MoviesResponse {
  results: Movie[];
}
