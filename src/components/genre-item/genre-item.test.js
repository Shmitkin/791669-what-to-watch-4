import React from "react";
import renderer from "react-test-renderer";
import GenreItem from "./genre-item.jsx";

it(`Should GenreItem render correctly`, () => {
  const tree = renderer
    .create(
        <GenreItem
          genre = {`Strange Genre`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
