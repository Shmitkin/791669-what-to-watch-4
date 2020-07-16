import React from "react";
import renderer from "react-test-renderer";

import AddReviewFormStar from "./add-review-form-star.jsx";

it(`Should AddReviewFormStar render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewFormStar id={3} checked={true}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
