import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  movies!: Movie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data?.results;
    });
  }

  searchMovie(title: string) {
    this.movieService.searchMoviesByTitle(title).subscribe((data) => {
      if (data?.results?.length === 0) {
        alert("No se encontraron resultados");
      } else {
        this.movies = data?.results;
      }
    });
  }
}
