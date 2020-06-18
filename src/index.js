import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films, mainFilm} from "./mocks/films.js";
import {genres} from "./mocks/genres.js";

ReactDOM.render(
    <App
      mainMovie = {mainFilm}
      movies = {films}
      genres = {genres}
    />,
    document.querySelector(`#root`)
);
