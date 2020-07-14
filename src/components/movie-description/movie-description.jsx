import React from "react";
import PropTypes from "prop-types";

import MovieButtons from "../movie-buttons/movie-buttons.jsx";

export default function MovieDescription({movie, isMovieDetails}) {

  const {title, genre, release, isFavorite} = movie;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{release}</span>
      </p>
      <MovieButtons isMovieDetails = {isMovieDetails} isFavorite= {isFavorite}/>
    </div>
  );
}


MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
};

