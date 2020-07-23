import React from "react";
import renderer from "react-test-renderer";

import {VideoPlayerPage} from "./video-player-page.jsx";
import {movie} from "../../test-state.js";

it(`Should render VideoPlayerPage propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerPage
        movie={movie}
      />
  );
  expect(tree).toMatchSnapshot();
});
