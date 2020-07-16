import React from "react";
import PropTypes from "prop-types";
import {MOVIE_RATING_TITLES} from "../../consts.js";

function getMovieTextRating(movieRating) {
  return MOVIE_RATING_TITLES.find(({rating}) => movieRating >= rating).title;
}

export default function MovieOverview({movie}) {
  const {rating, votes, description, director, starring} = movie;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getMovieTextRating(rating)}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {description}
        </p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
}

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
};
