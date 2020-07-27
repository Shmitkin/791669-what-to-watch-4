import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddReviewForm from "./add-review-form.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`AddReviewForm should call every handler for 1 time`, () => {

  const changeHandler = jest.fn(() => {});
  const submitHandler = jest.fn(() => {});

  const form = mount(
      <AddReviewForm
        onFormChange={changeHandler}
        onFormSubmit={submitHandler}
        isFormDisabled={false}
        isPostButtonDisabled={true}
        errorMessages={[``]}
      />
  );

  form.simulate(`change`);
  form.simulate(`submit`);

  expect(changeHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toHaveBeenCalledTimes(1);
});
