import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";


it(`Should VideoPlayer render correctly`, () => {
  const mockRef = React.createRef();

  const tree = renderer
    .create(
        <VideoPlayer
          src = {`src/src/src`}
          poster = {`img/someimage`}
          videoRef = {mockRef}
          muted = {true}
          loop = {true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
