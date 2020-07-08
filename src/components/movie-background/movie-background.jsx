import React from "react";
import PropTypes from "prop-types";


export default function MovieBackground({movie}) {

  console.log(movie);

  return (
    <div className="movie-card__bg">
      <img src={movie.background} alt={movie.title} />
    </div>
  );
}


MovieBackground.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
};
