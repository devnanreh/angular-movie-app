import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie, MoviesListResult } from "../models/movie";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiKey = "a29c1e8999010db720740a05fa2433bf";

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesListResult>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
    );
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    );
  }

  searchMoviesByTitle(title: string) {
    return this.http.get<MoviesListResult>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query={${title}}}`
    );
  }
}
