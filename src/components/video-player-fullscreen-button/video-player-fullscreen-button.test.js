import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerFullscreenButton from "./video-player-fullscreen-button.jsx";

it(`Should render VideoPlayerFullscreenButton propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerFullscreenButton
        onClick={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
