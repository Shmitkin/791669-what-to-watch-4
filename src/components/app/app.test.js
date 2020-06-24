import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {movies, genres, movie} from "../../test-state.js";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          mainMovie = {movie}
          movies = {movies}
          genres = {genres}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
