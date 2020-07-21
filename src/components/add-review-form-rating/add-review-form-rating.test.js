import React from "react";
import renderer from "react-test-renderer";

import AddReviewFormStars from "./add-review-form-rating.jsx";


it(`Should AddReviewFormStar render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewFormStars starsCount={5} defaultChecked={3} disabled={false}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
