import React from "react";
import renderer from "react-test-renderer";

import MovieMainPoster from "./movie-main-poster.jsx";
import {movie} from "../../test-state.js";


it(`Should MovieMainPoster render correctly`, () => {

  const tree = renderer
    .create(
        <MovieMainPoster movie = {movie} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
