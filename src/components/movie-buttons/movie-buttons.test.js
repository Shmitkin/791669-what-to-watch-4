import React from "react";
import renderer from "react-test-renderer";

import MovieButtons from "./movie-buttons.jsx";

it(`Should MovieButtons render correctly`, () => {
  const tree = renderer
    .create(
        <MovieButtons
          isAddReviewButton={false}
          isFavorite={false}
          onMyListButtonClickHandler={()=>{}}
          movieId={`id`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
