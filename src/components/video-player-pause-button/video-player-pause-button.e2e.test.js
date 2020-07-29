import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayerPauseButton from "./video-player-pause-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerPauseButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const pauseButton = mount(
      <VideoPlayerPauseButton
        onClick={clickHandler}
      />
  );

  pauseButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
