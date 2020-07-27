import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MovieDescription} from "./movie-description.jsx";
import {movie} from "../../test-state";
import {AuthorizationStatus} from "../../consts.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieDescription should call handler 1 time with movie value`, () => {

  const clickHandler = jest.fn(() => {});

  const movieDescription = mount(
      <BrowserRouter>
        <MovieDescription
          movie={movie}
          isAddReviewButton={true}
          changeFavoriteStatus={clickHandler}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </BrowserRouter>
  );

  movieDescription.find(`.btn--list`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenNthCalledWith(1, movie);
});
