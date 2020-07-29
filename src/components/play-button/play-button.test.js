import React from "react";
import renderer from "react-test-renderer";

import PlayButton from "./play-button.jsx";


it(`Should PlayButton render correctly`, () => {

  const tree = renderer
    .create(
        <PlayButton onClick={()=>{}}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
