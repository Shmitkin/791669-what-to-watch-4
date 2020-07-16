import React from "react";
import PropTypes from "prop-types";
import MyListButton from "../my-list-button/my-list-button.jsx";
import PlayButton from "../play-button/play-button.jsx";
import AddReviewButton from "../add-review-button/add-review-button.jsx";

export default function MovieButtons({isMovieDetails, isFavorite, onMyListButtonClickHandler}) {

  return (
    <div className="movie-card__buttons">
      <PlayButton />
      <MyListButton isFavorite={isFavorite} onClick={onMyListButtonClickHandler}/>
      {isMovieDetails ? <AddReviewButton /> : null}
    </div>
  );
}


MovieButtons.propTypes = {
  isMovieDetails: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onMyListButtonClickHandler: PropTypes.func.isRequired,
};
