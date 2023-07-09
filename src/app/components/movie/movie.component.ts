import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
// export class MovieComponent {}
export class MovieComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
