import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerPauseButton from "./video-player-pause-button.jsx";

it(`Should render VideoPlayerPauseButton propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerPauseButton
        onClick={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
