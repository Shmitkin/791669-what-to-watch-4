import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {movie} from "../../test-state.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie Card should call every handler for 1 time when it hovered, unhovered and clicked`, () => {

  const testState = {
    movie,
    title: `Stranger Things`,
    preview: `img/stranger-thisngs.jpg`,
    emptyString: ``,
    hoverHandler: jest.fn(() => {
      return testState.title;
    }),
    unhoverHandler: jest.fn(() => {
      return testState.emptyString;
    }),
    clickHandler: jest.fn(),
  };

  const movieCard = shallow(
      <MovieCard
        isPlaying = {true}
        movie = {testState.movie}
        onHover = {testState.hoverHandler}
        onUnhover = {testState.unhoverHandler}
        onClick = {testState.clickHandler}
      />
  );

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);
  movieCard.simulate(`click`, {
    preventDefault: () => {
    }
  });

  expect(testState.hoverHandler.mock.calls.length).toBe(1);
  expect(testState.unhoverHandler.mock.calls.length).toBe(1);
  expect(testState.clickHandler.mock.calls.length).toBe(1);
});
