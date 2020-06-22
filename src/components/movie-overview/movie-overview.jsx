import React from "react";
import PropTypes from "prop-types";
import {MOVIE_RATING_TITLES} from "../../consts.js";

export default function MovieOverview({movie}) {

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getMovieTextRating(movie.rating)}</span>
          <span className="movie-rating__count">{movie.votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {movie.description}
        </p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring}</strong></p>
      </div>
    </React.Fragment>
  );
}


function getMovieTextRating(movieRating) {
  return MOVIE_RATING_TITLES.find(({rating}) => movieRating >= rating).title;
}

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
  }).isRequired,
};
