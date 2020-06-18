import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview.jsx";

it(`Should MovieOverview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview
          rating = {5}
          votes = {344}
          description = {`description`}
          director = {`Oleg Mitkin`}
          starring = {`Some People`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
