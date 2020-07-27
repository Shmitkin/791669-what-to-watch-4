import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlayButton from "./play-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`PlayButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const playButton = mount(
      <PlayButton
        onClick={clickHandler}
      />
  );

  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
