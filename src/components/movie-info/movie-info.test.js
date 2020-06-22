import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";
import {movies, movie} from "../../test-state.js";

it(`Should MovieInfo render correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfo
          movie = {movie}
          similarMovies = {movies}
          onMovieCardClick = {() => {}}

        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
