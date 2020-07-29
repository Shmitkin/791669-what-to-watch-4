import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerPlayButton from "./video-player-play-button.jsx";

it(`Should render VideoPlayerPlayButton propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerPlayButton
        onClick={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
