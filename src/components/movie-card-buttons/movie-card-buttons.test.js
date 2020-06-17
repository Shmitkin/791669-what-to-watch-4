import React from "react";
import renderer from "react-test-renderer";
import MovieCardButtons from "./movie-card-buttons.jsx";

it(`Should MovieCardButtons render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardButtons />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
