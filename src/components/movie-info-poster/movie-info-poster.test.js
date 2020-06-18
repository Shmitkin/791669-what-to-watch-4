import React from "react";
import renderer from "react-test-renderer";
import MovieInfoPoster from "./movie-info-poster.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieInfoPoster render correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfoPoster
          movie = {movie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
