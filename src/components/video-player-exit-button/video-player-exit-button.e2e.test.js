import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayerExitButton from "./video-player-exit-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerExitButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const exitButton = mount(
      <VideoPlayerExitButton
        onClick={clickHandler}
      />
  );

  exitButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
