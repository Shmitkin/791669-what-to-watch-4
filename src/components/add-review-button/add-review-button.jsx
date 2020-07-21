import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {AppRoute} from "../../consts";


export default function AddReviewButton({movieId}) {
  return (
    <Link to={`${AppRoute.FILMS}/${movieId + AppRoute.REVIEW}`} className="btn movie-card__button">
      Add review
    </Link>
  );
}

AddReviewButton.propTypes = {
  movieId: PropTypes.string.isRequired,
};

