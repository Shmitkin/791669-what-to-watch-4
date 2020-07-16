import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import MovieCardsList from "./movie-cards-list.jsx";
import {movies} from "../../test-state.js";


it(`Should MovieCardsList render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MovieCardsList
            movies = {movies}
            onMovieCardClick = {() => {}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
