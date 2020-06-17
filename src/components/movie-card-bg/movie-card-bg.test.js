import React from "react";
import renderer from "react-test-renderer";
import MovieCardBg from "./movie-card-bg.jsx";

it(`Should MovieCardBg render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardBg altDesc = {`Some bg Description`}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
