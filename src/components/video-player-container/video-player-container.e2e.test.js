import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayerContainer from "./video-player-container.jsx";
import {movie} from "../../test-state";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerContainer should call every handler 1 time`, () => {

  const mockRef = React.createRef();

  const playClickHandler = jest.fn(() => {});
  const pauseClickHandler = jest.fn(() => {});
  const fullScreenClickHandler = jest.fn(() => {});
  const exitClickHandler = jest.fn(() => {});

  const videoPlayerContainer = mount(
      <VideoPlayerContainer
        movie={movie}
        isPlaying={false}
        videoRef={mockRef}
        progress={55}
        remaining={300}
        onExitButtonClickHandler={exitClickHandler}
        onPauseButtonClickHandler={pauseClickHandler}
        onPlayButtonClickHandler={playClickHandler}
        onFullscreenButtonClickHandler={fullScreenClickHandler}
      />
  );


  videoPlayerContainer.find(`.player__play`).simulate(`click`);

  videoPlayerContainer.setProps({isPlaying: true});

  videoPlayerContainer.find(`.player__play`).simulate(`click`);
  videoPlayerContainer.find(`.player__exit`).simulate(`click`);
  videoPlayerContainer.find(`.player__full-screen`).simulate(`click`);

  expect(exitClickHandler).toHaveBeenCalledTimes(1);
  expect(pauseClickHandler).toHaveBeenCalledTimes(1);
  expect(playClickHandler).toHaveBeenCalledTimes(1);
  expect(fullScreenClickHandler).toHaveBeenCalledTimes(1);
});
