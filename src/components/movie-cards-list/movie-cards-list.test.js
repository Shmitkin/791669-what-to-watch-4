import React from "react";
import renderer from "react-test-renderer";
import MovieCardsList from "./movie-cards-list.jsx";
import {movies} from "../../test-state.js";

it(`Should MovieCardsList render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardsList
          movies = {movies}
          onMovieCardClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
