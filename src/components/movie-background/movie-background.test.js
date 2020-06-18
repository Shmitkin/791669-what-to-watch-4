import React from "react";
import renderer from "react-test-renderer";
import MovieBackground from "./movie-background.jsx";

it(`Should MovieBackground render correctly`, () => {
  const tree = renderer
    .create(
        <MovieBackground altDesc = {`Some bg Description`}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
