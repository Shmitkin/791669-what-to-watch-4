import React from "react";
import renderer from "react-test-renderer";
import AddReviewButton from "./add-review-button.jsx";

it(`Should AddReviewButton render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewButton
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
