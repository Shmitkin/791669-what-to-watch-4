import React from "react";
import renderer from "react-test-renderer";

import GenresList from "./genres-list.jsx";

const genres = [`first`, `second`, `third`];

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={genres}
          onTabClick={()=>{}}
          activeTab={`someTab`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
