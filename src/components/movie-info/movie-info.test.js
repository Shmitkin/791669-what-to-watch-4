import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";

it(`Should MovieInfo render correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfo
          title = {`Some Title`}
          release = {2014}
          genre = {`Some Genre`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
