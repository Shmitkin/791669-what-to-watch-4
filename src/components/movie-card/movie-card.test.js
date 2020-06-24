import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movie = {{}}
          title={`Stranger Things`}
          preview = {`img/stranger-thisngs.jpg`}
          onHover = {() => {}}
          onUnhover = {() => {}}
          onClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
