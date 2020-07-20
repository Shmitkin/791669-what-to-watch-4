import React from "react";
import PropTypes from "prop-types";

import AddReviewFormStar from "../add-review-form-star/add-review-form-star.jsx";

export default function AddReviewFormRating({starsCount, defaultChecked}) {
  const stars = [];
  for (let i = 1; i <= starsCount; i++) {
    stars.push(<AddReviewFormStar key={i} id={i} checked={i === defaultChecked} />);
  }
  stars.reverse();

  return (
    <div className="rating">
      <div className="rating__stars" dir="rtl">
        {stars}
      </div>
    </div>
  );
}

AddReviewFormRating.propTypes = {
  starsCount: PropTypes.number.isRequired,
  defaultChecked: PropTypes.number.isRequired,
};
