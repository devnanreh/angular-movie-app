import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  movies: any = [];

  numero: number = 0;
  resultado: number = 0;

  constructor(
    private movieService: MoviesService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title).subscribe((data: any) => {
      if (data.results.length === 0) {
        alert("No se encontraron resultados");
      } else {
        this.movies = data.results;
      }
    });
  }
}
