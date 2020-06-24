import React from "react";
import renderer from "react-test-renderer";
import MovieReview from "./movie-review.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReview
          review = {movie.reviews[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
