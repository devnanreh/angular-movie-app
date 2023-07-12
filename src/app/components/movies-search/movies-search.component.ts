import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movies-search",
  templateUrl: "./movies-search.component.html",
  styleUrls: ["./movies-search.component.css"],
})
export class MovieSearchComponent implements OnInit {
  movies: any = [];

  constructor(
    private movieService: MoviesService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.queryParams.subscribe((params: any) => {
      console.log(params);
    });
  }
}
