import React from "react";
import PropTypes from "prop-types";

export default function MovieInfoPoster({movie}) {

  return (
    <div className="movie-card__poster movie-card__poster--big">
      <img src ={movie.poster} alt = {`${movie.title} poster`} width="218" height="327" />
    </div>
  );
}


MovieInfoPoster.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};
