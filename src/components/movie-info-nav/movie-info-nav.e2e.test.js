import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieInfoNav from "./movie-info-nav.jsx";
import {MovieInfoTabs} from "../../consts.js";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieInfoNav should call handler 1 time for every genre, 
every handler call should be called with genre name which it clicked`, () => {

  const clickHandler = jest.fn(() => {});

  const movieInfoNav = mount(
      <MovieInfoNav
        onClick={clickHandler}
        activeTab={MovieInfoTabs.OVERVIEW}
      />
  );

  movieInfoNav.find(`.movie-nav__link`).forEach((item) => {
    item.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(3);
  expect(clickHandler).toHaveBeenNthCalledWith(1, MovieInfoTabs.OVERVIEW);
  expect(clickHandler).toHaveBeenNthCalledWith(2, MovieInfoTabs.DETAILS);
  expect(clickHandler).toHaveBeenNthCalledWith(3, MovieInfoTabs.REVIEWS);
});
