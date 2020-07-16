import React from "react";
import renderer from "react-test-renderer";

import MovieBackground from "./movie-background.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieBackground render correctly`, () => {
  const tree = renderer
    .create(
        <MovieBackground
          movie = {movie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
