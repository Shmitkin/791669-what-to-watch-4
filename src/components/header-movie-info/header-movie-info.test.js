import React from "react";
import renderer from "react-test-renderer";
import HeaderMovieInfo from "./header-movie-info.jsx";
import {movie} from "../../test-state.js";

it(`Should HeaderMovieInfo render correctly`, () => {
  const tree = renderer
    .create(
        <HeaderMovieInfo
          movie = {movie}
          isMovieDetails = {false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
