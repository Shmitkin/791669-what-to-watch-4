import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MyListButton from "./my-list-button.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`MyListButton should call handler 1 time`, () => {

  const clickHandler = jest.fn(() => {});

  const myListButton = mount(
      <MyListButton
        isFavorite={true}
        onClick={clickHandler}
      />
  );

  myListButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
