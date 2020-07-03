import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Video should play and stop when flag isPlaying changing`, () => {

  const playMock = jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

  const loadMock = jest
  .spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

  const wrapper = mount(
      <VideoPlayer
        isPlaying = {false}
        src = {`videoLink`}
        poster = {`posterLink`}
        muted = {false}
      />);

  wrapper.setProps({isPlaying: true});
  expect(playMock).toHaveBeenCalledTimes(1);
  wrapper.setProps({isPlaying: false});
  expect(loadMock).toHaveBeenCalledTimes(1);

});
