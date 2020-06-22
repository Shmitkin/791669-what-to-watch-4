import React from "react";
import PropTypes from "prop-types";


export default function MovieMainPoster({movie}) {

  return (
    <div className="movie-card__poster">
      <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
    </div>
  );
}

MovieMainPoster.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
