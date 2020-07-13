import React from "react";
import renderer from "react-test-renderer";
import MovieReview from "./movie-review.jsx";

const review = {
  text: `review text`,
  author: `author`,
  date: `date string`,
  rating: 0.5,
};

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReview
          review = {review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
