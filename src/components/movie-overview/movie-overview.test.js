import React from "react";
import renderer from "react-test-renderer";

import MovieOverview from "./movie-overview.jsx";
import {movie} from "../../test-state.js";


it(`Should MovieOverview render correctly`, () => {

  const tree = renderer
    .create(
        <MovieOverview
          movie = {movie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
