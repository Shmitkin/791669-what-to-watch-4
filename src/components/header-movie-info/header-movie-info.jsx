import React from "react";
import PropTypes from "prop-types";

import MovieDescription from "../movie-description/movie-description.jsx";
import MovieMainPoster from "../movie-main-poster/movie-main-poster.jsx";


export default function HeaderMovieInfo({movie, isMovieDetails}) {

  return (
    <div className="movie-card__info">
      <MovieMainPoster movie = {movie} />
      <MovieDescription
        movie = {movie}
        isMovieDetails = {isMovieDetails}
      />
    </div>
  );
}


HeaderMovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
};
