import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = ({mainMovieTitle, mainMovieGenre, mainMovieReleaseDate, movies}) => {
  return (
    <MainScreen
      mainMovieTitle = {mainMovieTitle}
      mainMovieGenre = {mainMovieGenre}
      mainMovieReleaseDate = {mainMovieReleaseDate}
      movies = {movies}
    />
  );
};

App.propTypes = {
  mainMovieTitle: PropTypes.string.isRequired,
  mainMovieGenre: PropTypes.string.isRequired,
  mainMovieReleaseDate: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
};


export default App;
