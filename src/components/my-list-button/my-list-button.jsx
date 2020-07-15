import React from "react";
import PropTypes from "prop-types";

export default function MyListButton({isFavorite, onClick}) {

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onClick}>
      {isFavorite
        ? <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        : <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
