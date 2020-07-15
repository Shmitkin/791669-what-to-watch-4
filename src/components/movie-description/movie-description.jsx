import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieButtons from "../movie-buttons/movie-buttons.jsx";

import {Operation as DataOperation} from "../../reducer/data/data.js";

export function MovieDescription({movie, isMovieDetails, changeFavoriteStatus}) {

  const {title, genre, release, isFavorite} = movie;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{release}</span>
      </p>
      <MovieButtons
        isMovieDetails={isMovieDetails}
        isFavorite={isFavorite}
        onMyListButtonClickHandler={() => {
          changeFavoriteStatus(movie);
        }}/>
    </div>
  );
}


MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus: (movie) => {
    dispatch(DataOperation.changeMovieFavoriteStatus(movie));
  },
});

export default connect(null, mapDispatchToProps)(MovieDescription);
