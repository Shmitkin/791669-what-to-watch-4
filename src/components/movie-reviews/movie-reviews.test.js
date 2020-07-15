import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";

const reviews = [
  {
    id: 1212,
    text: `reviewText`,
    author: `author`,
    rating: 8.4,
    date: `date string`,
  },
  {
    id: 32,
    text: `review text`,
    author: `author`,
    rating: 8.4,
    date: `date string`,
  },
];

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews
          reviews = {reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
