import React from "react";
import renderer from "react-test-renderer";

import AddReviewForm from "./add-review-form.jsx";


it(`Should AddReviewForm render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewForm
          onFormChange={()=>{}}
          onFormSubmit={()=>{}}
          isPostButtonDisabled={true}
          errorMessages={[]}
          isFormDisabled={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
