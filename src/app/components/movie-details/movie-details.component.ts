import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
})
export class MovieDetailsComponent implements OnInit {
  movie!: any;

  constructor(
    private movieService: MoviesService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      this.movieService.getMovieById(params.movieId).subscribe((resp) => {
        this.movie = resp;
      });
    });
  }
}
