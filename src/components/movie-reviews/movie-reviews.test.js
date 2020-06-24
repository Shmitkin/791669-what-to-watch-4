import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews
          movie = {movie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
