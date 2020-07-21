import React from "react";
import renderer from "react-test-renderer";

import MoviePoster from "./movie-poster.jsx";
import {movie} from "../../test-state.js";
import {MoviePosterSize} from "../../consts.js";


it(`Should MoviePoster render correctly`, () => {

  const tree = renderer
    .create(
        <MoviePoster movie={movie} posterSize={MoviePosterSize.DEFAULT}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
