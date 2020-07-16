import React from "react";
import renderer from "react-test-renderer";

import MoviePoster from "./movie-poster.jsx";
import {movie} from "../../test-state.js";


it(`Should MoviePoster render correctly`, () => {

  const tree = renderer
    .create(
        <MoviePoster movie={movie} isMovieDetails={false}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
