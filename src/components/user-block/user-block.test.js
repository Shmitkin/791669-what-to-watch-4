import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block.jsx";

it(`Should UserBlock render correctly`, () => {
  const tree = renderer
    .create(
        <UserBlock />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
