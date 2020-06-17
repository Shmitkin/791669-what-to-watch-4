import React from "react";
import renderer from "react-test-renderer";
import MovieCardPoster from "./movie-card-poster.jsx";

it(`Should MovieCardPoster render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardPoster altDesc = {`someDescription`} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
