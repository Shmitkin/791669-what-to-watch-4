import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films.js";


const Settings = {
  MainMovie: {
    TITLE: `Hotel Grand Budapesht`,
    GENRE: `Drama`,
    RELEASE_DATE: 2014
  }
};

ReactDOM.render(
    <App
      mainMovieTitle = {Settings.MainMovie.TITLE}
      mainMovieGenre = {Settings.MainMovie.GENRE}
      mainMovieReleaseDate = {Settings.MainMovie.RELEASE_DATE}
      movies = {films}
    />,
    document.querySelector(`#root`)
);
