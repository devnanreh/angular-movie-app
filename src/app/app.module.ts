import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
// import { MatCardModule } from "@angular/material/card";
// import { MatGridListModule } from "@angular/material/grid-list";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material/button";

import { MovieComponent } from "./components/movie/movie.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "detalles",
    loadChildren: () =>
      import("./components/movie-details/movie-details.component").then(
        (m) => m.MovieDetailsComponent
      ),
  },
];
@NgModule({
  declarations: [AppComponent, MovieComponent, MovieDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
