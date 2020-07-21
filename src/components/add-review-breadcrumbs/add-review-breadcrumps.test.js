import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {movie} from "../../test-state.js";
import AddReviewBreadcrumps from "./add-review-breadcrumbs.jsx";


it(`Should AddReviewBreadcrumps render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddReviewBreadcrumps movie={movie}/>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
