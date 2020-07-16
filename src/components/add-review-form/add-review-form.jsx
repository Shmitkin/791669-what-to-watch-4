import React from "react";
import PropTypes from "prop-types";

import AddReviewFormRating from "../add-review-form-rating/add-review-form-rating.jsx";

import {ReviewFormStars} from "../../consts.js";


export default function AddReviewForm({onFormChange, onFormSubmit}) {

  return (
    <form action="#" className="add-review__form" onChange={onFormChange} onSubmit={onFormSubmit}>
      <AddReviewFormRating starsCount={ReviewFormStars.COUNT} defaultChecked={ReviewFormStars.DEFAULT_CHECKED}/>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
