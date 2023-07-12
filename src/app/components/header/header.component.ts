import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private movieService: MoviesService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitSearchMovie(title: string) {
    title = title.trim();

    if (title.length === 0) {
      return;
    }
    this.router.navigate(["/search", title]);
  }
}
