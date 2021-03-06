import React from "react";
import PropTypes from "prop-types";

export default function AddReviewFormStar({id, checked, disabled}) {
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${id}`} type="radio" name="rating" value={id} defaultChecked={checked} disabled={disabled}/>
      <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
    </React.Fragment>
  );
}

AddReviewFormStar.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
