import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import AddReviewButton from "./add-review-button.jsx";

it(`Should AddReviewButton render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddReviewButton movieId={`id`}/>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
