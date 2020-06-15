import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const movieCardTitleHandler = () => {};

const App = ({mainMovieTitle, mainMovieGenre, mainMovieReleaseDate, movieTitles}) => {
  return (
    <MainScreen
      mainMovieTitle = {mainMovieTitle}
      mainMovieGenre = {mainMovieGenre}
      mainMovieReleaseDate = {mainMovieReleaseDate}
      movieTitles = {movieTitles}
      movieCardTitleHandler = {movieCardTitleHandler}
    />
  );
};

App.propTypes = {
  mainMovieTitle: PropTypes.string.isRequired,
  mainMovieGenre: PropTypes.string.isRequired,
  mainMovieReleaseDate: PropTypes.number.isRequired,
  movieTitles:
  PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};


export default App;
