import React from "react";
import PropTypes from "prop-types";

import MovieDescription from "../movie-description/movie-description.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";

export default function HeaderMovieInfo({movie, isMovieDetails, posterSize}) {

  return (
    <div className="movie-card__info">
      <MoviePoster movie={movie} posterSize={posterSize}/>
      <MovieDescription movie={movie} isMovieDetails={isMovieDetails}/>
    </div>
  );
}


HeaderMovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
  posterSize: PropTypes.string.isRequired,
};
