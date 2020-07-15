import React from "react";
import renderer from "react-test-renderer";

import MovieInfoNavTab from "./movie-info-nav-tab.jsx";


it(`Should MovieInfoNavTab render correctly`, () => {

  const tree = renderer
    .create(
        <MovieInfoNavTab
          onClick = {()=>{}}
          activeTab = {`Overview`}
          tabTitle = {`Overview`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
