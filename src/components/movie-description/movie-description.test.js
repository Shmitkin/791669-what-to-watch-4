import React from "react";
import renderer from "react-test-renderer";

import {MovieDescription} from "./movie-description.jsx";
import {movie} from "../../test-state.js";

it(`Should MovieDescription render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDescription
          movie={movie}
          isMovieDetails={false}
          onMyListButtonClickHandler={()=>{}}
          changeFavoriteStatus={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
