import React from "react";
import PropTypes from "prop-types";


export default function MoviePoster({movie, isMovieDetails}) {
  const {title, poster} = movie;

  return (
    <div className={`movie-card__poster ${isMovieDetails ? `movie-card__poster--big` : ``}`}>
      <img src={poster} alt={`${title} poster`} width="218" height="327" />
    </div>
  );
}

MoviePoster.propTypes = {
  isMovieDetails: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
