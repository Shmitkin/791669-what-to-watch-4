import React from "react";
import renderer from "react-test-renderer";

import MovieReview from "./movie-review.jsx";
import {comments} from "../../test-state.js";

it(`Should MovieReview render correctly`, () => {

  const tree = renderer
    .create(
        <MovieReview
          review = {comments[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
