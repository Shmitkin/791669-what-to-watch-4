import React from "react";
import PropTypes from "prop-types";

export default function MovieReview(props) {
  const {review} = props;
  const {text, author, date, rating} = review;

  const normalizedDate = date.toDateString();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date"
            dateTime={normalizedDate}>
            {normalizedDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

MovieReview.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
};
