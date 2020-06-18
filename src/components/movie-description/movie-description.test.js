import React from "react";
import renderer from "react-test-renderer";
import MovieDescription from "./movie-description.jsx";

it(`Should MovieDescription render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDescription
          title = {`Some Title`}
          release = {2014}
          genre = {`Some Genre`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
