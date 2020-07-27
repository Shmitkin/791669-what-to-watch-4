import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreItem from "./genre-item.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`GenreItem should call handler for 1 time with genre name payload when it clicked`, () => {

  const clickHandler = jest.fn(() => {});

  const genreItem = shallow(
      <GenreItem
        genre={`genre`}
        activeTab={`anotherGenre`}
        onClick={clickHandler}
      />
  );

  genreItem.find(`a`).simulate(`click`, {
    preventDefault: () => {
    }
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenNthCalledWith(1, `genre`);
});
