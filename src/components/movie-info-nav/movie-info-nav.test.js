import React from "react";
import renderer from "react-test-renderer";

import MovieInfoNav from "./movie-info-nav.jsx";


it(`Should MovieInfoNav render correctly`, () => {

  const tree = renderer
    .create(
        <MovieInfoNav
          onClick = {()=>{}}
          activeTab = {`Overview`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
