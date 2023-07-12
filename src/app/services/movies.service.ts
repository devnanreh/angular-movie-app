import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiKey = "a29c1e8999010db720740a05fa2433bf";

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
    );
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    );
  }

  searchMovieByTitle(title: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query={${title}}}`
    );
  }
}
