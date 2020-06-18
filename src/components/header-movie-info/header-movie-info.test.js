import React from "react";
import renderer from "react-test-renderer";
import HeaderMovieInfo from "./header-movie-info.jsx";

it(`Should HeaderMovieInfo render correctly`, () => {
  const tree = renderer
    .create(
        <HeaderMovieInfo
          title = {`Some Title`}
          release = {2014}
          genre = {`Some Genre`}
          isMovieDetails = {false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
