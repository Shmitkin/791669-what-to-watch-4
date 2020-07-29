import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayerFullScreenButton from "./video-player-fullscreen-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerFullScreenButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const fullscreenButton = mount(
      <VideoPlayerFullScreenButton
        onClick={clickHandler}
      />
  );

  fullscreenButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
