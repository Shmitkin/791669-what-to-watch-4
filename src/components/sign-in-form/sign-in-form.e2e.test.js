import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignInForm from "./sign-in-form.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`SignInForm should call every handler 1 time`, () => {

  const submitHandler = jest.fn(() => {});
  const changeHandler = jest.fn(() => {});
  const focusHandler = jest.fn(() => {});

  const signInForm = mount(
      <SignInForm
        onSubmit={submitHandler}
        onChange={changeHandler}
        onFocus={focusHandler}
        errorMessage={``}
        emailValidity={true}
        passValidity={true}
      />
  );

  signInForm.find(`.sign-in__input`).forEach((input) => {
    input.simulate(`focus`);
  });

  signInForm.simulate(`submit`);

  signInForm.simulate(`change`);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(changeHandler).toHaveBeenCalledTimes(1);
  expect(focusHandler).toHaveBeenCalledTimes(2);
});
