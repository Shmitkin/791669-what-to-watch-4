import React from "react";
import PropTypes from "prop-types";

import MovieDescription from "../movie-description/movie-description.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";

export default function HeaderMovieInfo({movie, isAddReviewButton, posterSize}) {

  return (
    <div className="movie-card__info">
      <MoviePoster movie={movie} posterSize={posterSize}/>
      <MovieDescription movie={movie} isAddReviewButton={isAddReviewButton}/>
    </div>
  );
}


HeaderMovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  isAddReviewButton: PropTypes.bool.isRequired,
  posterSize: PropTypes.string.isRequired,
};
