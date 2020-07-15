import React from "react";
import renderer from "react-test-renderer";

import SignInForm from "./sign-in-form.jsx";


it(`Should SignInForm render correctly`, () => {

  const tree = renderer
    .create(
        <SignInForm
          onSubmit={()=>{}}
          onChange={()=>{}}
          onFocus={()=>{}}
          errorMessage={`error message`}
          emailValidity={true}
          passValidity={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
