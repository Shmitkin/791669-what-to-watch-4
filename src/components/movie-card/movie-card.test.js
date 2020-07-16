import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import MovieCard from "./movie-card.jsx";
import {movie} from "../../test-state.js";


it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MovieCard
            isPlaying = {true}
            movie ={movie}
            onHover = {() => {}}
            onUnhover = {() => {}}
            onClick = {() => {}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
