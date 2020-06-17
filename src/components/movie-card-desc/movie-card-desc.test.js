import React from "react";
import renderer from "react-test-renderer";
import MovieCardDesc from "./movie-card-desc.jsx";

it(`Should MovieCardDesc render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardDesc
          title = {`Some Title`}
          release = {2014}
          genre = {`Some Genre`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
