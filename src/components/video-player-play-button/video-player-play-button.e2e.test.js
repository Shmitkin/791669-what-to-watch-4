import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayerPlayButton from "./video-player-play-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerPlayButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const playButton = mount(
      <VideoPlayerPlayButton
        onClick={clickHandler}
      />
  );

  playButton.find(`button`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
