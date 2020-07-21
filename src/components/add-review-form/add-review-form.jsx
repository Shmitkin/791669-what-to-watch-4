import React from "react";
import PropTypes from "prop-types";

import AddReviewFormRating from "../add-review-form-rating/add-review-form-rating.jsx";

import {ReviewFormStars} from "../../consts.js";


export default function AddReviewForm(props) {
  const {onFormChange, onFormSubmit, isPostButtonDisabled, errorMessages, isFormDisabled} = props;
  return (

    <form action="#" className="add-review__form" onChange={onFormChange} onSubmit={onFormSubmit}>
      <AddReviewFormRating starsCount={ReviewFormStars.COUNT} defaultChecked={ReviewFormStars.DEFAULT_CHECKED} disabled={isFormDisabled}/>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={isFormDisabled}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isPostButtonDisabled}>Post</button>
        </div>
      </div>
      <div className="sign-in__message">
        {errorMessages.map((message, i) => <p key={i}>{message}</p>)}
      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isPostButtonDisabled: PropTypes.bool.isRequired,
  errorMessages: PropTypes.arrayOf(
      PropTypes.string
  )
};
