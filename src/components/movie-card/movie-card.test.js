import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movie ={movie}
          onHover = {() => {}}
          onUnhover = {() => {}}
          onClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
