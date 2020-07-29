import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerContainer from "./video-player-container.jsx";
import {movie} from "../../test-state.js";

const mockRef = React.createRef();

it(`Should render VideoPlayerPage propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerContainer
        movie={movie}
        isPlaying={true}
        videoRef={mockRef}
        progress={55}
        remaining={4522}
        onExitButtonClickHandler={()=>{}}
        onPauseButtonClickHandler={()=>{}}
        onPlayButtonClickHandler={()=>{}}
        onFullscreenButtonClickHandler={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
