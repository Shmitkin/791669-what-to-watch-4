import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerExitButton from "./video-player-exit-button.jsx";

it(`Should render VideoPlayerExitButton propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerExitButton
        onClick={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
