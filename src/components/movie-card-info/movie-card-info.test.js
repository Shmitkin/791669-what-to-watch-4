import React from "react";
import renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info.jsx";

it(`Should MovieCardInfo render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardInfo
          title = {`Some Title`}
          release = {2014}
          genre = {`Some Genre`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
