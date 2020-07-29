import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenresList from "./genres-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`GenresList should call handler 1 time for every genre, 
every handler call should be called with genre name which it clicked`, () => {

  const clickHandler = jest.fn(() => {});

  const genresList = mount(
      <GenresList
        genres={[`first`, `second`, `third`]}
        onTabClick={clickHandler}
        activeTab={`first`}
      />
  );

  genresList.find(`.catalog__genres-link`).forEach((item) => {
    item.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(3);
  expect(clickHandler).toHaveBeenNthCalledWith(1, `first`);
  expect(clickHandler).toHaveBeenNthCalledWith(2, `second`);
  expect(clickHandler).toHaveBeenNthCalledWith(3, `third`);
});
