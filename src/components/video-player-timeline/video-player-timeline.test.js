import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerTimeLine from "./video-player-timeline.jsx";

it(`Should render VideoPlayerTimeLine propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerTimeLine
        progress={50}
        remaining={700}
      />
  );
  expect(tree).toMatchSnapshot();
});
