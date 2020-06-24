import React from "react";
import PropTypes from "prop-types";

import MovieButtons from "../movie-buttons/movie-buttons.jsx";

export default function MovieDescription({movie, isMovieDetails}) {

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{movie.title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{movie.genre}</span>
        <span className="movie-card__year">{movie.release}</span>
      </p>
      <MovieButtons isMovieDetails = {isMovieDetails}/>
    </div>
  );
}


MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
};

