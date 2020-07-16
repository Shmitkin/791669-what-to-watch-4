import React from "react";
import PropTypes from "prop-types";

import {MoviePosterSize} from "../../consts.js";

const addExtraClass = (posterSize) => {
  switch (posterSize) {
    case MoviePosterSize.BIG:
      return `movie-card__poster--big`;
    case MoviePosterSize.SMALL:
      return `movie-card__poster--small`;
    case MoviePosterSize.DEFAULT:
      return ``;
    default: return ``;
  }
};

export default function MoviePoster({movie, posterSize}) {
  const {title, poster} = movie;

  return (
    <div className={`movie-card__poster ${addExtraClass(posterSize)}`}>
      <img src={poster} alt={`${title} poster`} width="218" height="327" />
    </div>
  );
}

MoviePoster.propTypes = {
  posterSize: PropTypes.oneOf(Object.values(MoviePosterSize)).isRequired,
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
