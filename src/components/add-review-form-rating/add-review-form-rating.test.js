import React from "react";
import renderer from "react-test-renderer";

import AddReviewFormStar from "./add-review-form-rating.jsx";


it(`Should AddReviewFormStar render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewFormStar starsCount={5} defaultChecked={3}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
