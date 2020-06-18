import React from "react";
import renderer from "react-test-renderer";
import MovieMainPoster from "./movie-main-poster.jsx";

it(`Should MovieMainPoster render correctly`, () => {
  const tree = renderer
    .create(
        <MovieMainPoster altDesc = {`someDescription`} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
