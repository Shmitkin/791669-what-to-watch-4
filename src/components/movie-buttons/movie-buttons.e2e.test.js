import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import MovieButtons from "./movie-buttons.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieButtons should call handler 1 time for every button`, () => {

  const onMyListButtonClickHandler = jest.fn(() => {});
  const onPlayButtonClickHandler = jest.fn(()=>{});

  const movieButtons = mount(
      <BrowserRouter>
        <MovieButtons
          isAddReviewButton={true}
          isFavorite={true}
          onMyListButtonClickHandler={onMyListButtonClickHandler}
          onPlayButtonClickHandler={onPlayButtonClickHandler}
          movieId={`17`}
        />
      </BrowserRouter>
  );

  movieButtons.find(`.btn--play`).simulate(`click`);
  movieButtons.find(`.btn--list`).simulate(`click`);

  expect(onMyListButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(onMyListButtonClickHandler).toHaveBeenCalledTimes(1);
});
