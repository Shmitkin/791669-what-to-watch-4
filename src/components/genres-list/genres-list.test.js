import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres = {[`First`, `Second`, `Third`]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
