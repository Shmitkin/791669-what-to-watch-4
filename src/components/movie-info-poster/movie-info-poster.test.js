import React from "react";
import renderer from "react-test-renderer";
import MovieInfoPoster from "./movie-info-poster.jsx";

it(`Should MovieInfoPoster render correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfoPoster
          altDesc = {`description`}
          image = {`src/image`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
