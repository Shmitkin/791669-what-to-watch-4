import React from "react";
import PropTypes from "prop-types";

export default function ShowMoreButton({onClick}) {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

