import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerPage from "./video-player-page.jsx";
import {movie} from "../../test-state.js";

const mockRef = React.createRef();

it(`Should render VideoPlayerPage propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerPage
        movie={movie}
        isPlaying={true}
        videoRef={mockRef}
        progress={50}
        remaining={700}
        onExitButtonClickHandler={()=>{}}
        onPauseButtonClickHandler={()=>{}}
        onPlayButtonClickHandler={()=>{}}
        onFullscreenButtonClickHandler={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
