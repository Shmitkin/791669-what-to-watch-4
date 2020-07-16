import React from "react";
import PropTypes from "prop-types";

export default function MovieBackground({movie}) {
  const {background, title} = movie;
  return (
    <div className="movie-card__bg">
      <img src={background} alt={title} />
    </div>
  );
}

MovieBackground.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
};
