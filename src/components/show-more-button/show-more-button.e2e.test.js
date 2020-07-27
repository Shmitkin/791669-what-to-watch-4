import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMoreButton from "./show-more-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`ShowMoreButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const showMoreButton = mount(
      <ShowMoreButton
        onClick={clickHandler}
      />
  );

  showMoreButton.find(`button`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
