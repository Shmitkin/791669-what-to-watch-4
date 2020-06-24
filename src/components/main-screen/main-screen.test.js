import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {movie, movies, genres} from "../../test-state.js";

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(
        <MainScreen
          mainMovie = {movie}
          movies = {movies}
          genres = {genres}
          onMovieCardClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
