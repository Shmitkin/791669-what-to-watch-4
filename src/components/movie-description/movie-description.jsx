import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import history from "../../history.js";

import MovieButtons from "../movie-buttons/movie-buttons.jsx";

import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, AppRoute} from "../../consts.js";

function MovieDescription({movie, isAddReviewButton, changeFavoriteStatus, authorizationStatus}) {

  const {title, genre, release, isFavorite, id} = movie;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{release}</span>
      </p>
      <MovieButtons
        isAddReviewButton={isAddReviewButton}
        isFavorite={isFavorite}
        onMyListButtonClickHandler={() => {
          if (authorizationStatus === AuthorizationStatus.AUTH) {
            changeFavoriteStatus(movie);
          } else {
            history.push(AppRoute.LOGIN);
          }
        }}
        movieId={id}
      />
    </div>
  );
}


MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isAddReviewButton: PropTypes.bool.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)). isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus: (movie) => {
    dispatch(DataOperation.changeMovieFavoriteStatus(movie));
  },
});

export {MovieDescription};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
