export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  original_language: string;
  homepage: string;
  genres: { name: string }[];
  language: string;
}

export interface MoviesListResult {
  results: Movie[];
}
