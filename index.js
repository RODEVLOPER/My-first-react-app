import React from "react";
import ReactDOM from "react-dom";
import { getMovies } from "./services/fakeMovieService";
import { movies } from "./services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import { Moviestables } from "./Moviestables";

export let moviesconv = getMovies();

ReactDOM.render(<Moviestables />, document.getElementById("root"));
moviesconv.map((allmoviesc2) => <p>{allmoviesc2.id}</p>);
