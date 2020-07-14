import React from "react";
import renderer from "react-test-renderer";
import MyListButton from "./my-list-button.jsx";

it(`Should MyListButton render correctly`, () => {
  const tree = renderer
    .create(
        <MyListButton isFavorite = {false}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
