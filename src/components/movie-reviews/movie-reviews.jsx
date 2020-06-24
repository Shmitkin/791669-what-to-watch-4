import React from "react";
import PropTypes from "prop-types";
import MovieReview from "../movie-review/movie-review.jsx";


export default function MovieReviews(props) {
  const {movie} = props;
  const {reviews} = movie;

  const reviewsCols = reviews.reduce((accumulator, currentReview, index) => {
    if (index % 2 === 0) {
      accumulator.left.push(currentReview);
    } else {
      accumulator.right.push(currentReview);
    }
    return accumulator;
  }, {left: [], right: []});

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviewsCols.left.map((review, index) =>
          <MovieReview
            key = {`${index}-${review.date.toDateString()}`}
            review = {review}
          />
        )}
      </div>
      <div className="movie-card__reviews-col">
        {reviewsCols.right.map((review, index) =>
          <MovieReview
            key = {`${index}-${review.date.toDateString()}`}
            review = {review}
          />
        )}
      </div>
    </div>
  );
}

MovieReviews.propTypes = {
  movie: PropTypes.shape({
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};
