import React from "react";
import PropTypes from "prop-types";

export default function MovieReview(props) {
  const {review} = props;
  const {text, author, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date"
            dateTime={date}>
            {date}
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
    date: PropTypes.string.isRequired,
  }).isRequired,
};
