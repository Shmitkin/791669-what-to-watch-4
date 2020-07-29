import React from "react";
import renderer from "react-test-renderer";

import {MovieDescription} from "./movie-description.jsx";
import {movie} from "../../test-state.js";
import {AuthorizationStatus} from "../../consts.js";

it(`Should MovieDescription render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDescription
          movie={movie}
          isAddReviewButton={false}
          onMyListButtonClickHandler={()=>{}}
          changeFavoriteStatus={()=>{}}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
