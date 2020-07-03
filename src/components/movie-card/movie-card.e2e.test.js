import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {movie} from "../../test-state.js";
import {BrowserRouter as Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie Card should call every handler for 1 time when it hovered, unhovered and clicked`, () => {

  const testState = {
    movie,
    title: `Stranger Things`,
    preview: `img/stranger-thisngs.jpg`,
    emptyString: ``,
    hoverHandler: jest.fn(() => {}),
    unhoverHandler: jest.fn(() => {}),
    clickHandler: jest.fn(() => {}),
  };

  const movieCard = mount(
      <Router>
        <MovieCard
          isPlaying = {true}
          movie = {testState.movie}
          onHover = {testState.hoverHandler}
          onUnhover = {testState.unhoverHandler}
          onClick = {testState.clickHandler}
        />
      </Router>
  );


  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);
  movieCard.find(`.small-movie-card__link`).at(0).simulate(`click`);

  expect(testState.hoverHandler.mock.calls.length).toBe(1);
  expect(testState.unhoverHandler.mock.calls.length).toBe(1);
  expect(testState.clickHandler.mock.calls.length).toBe(1);
});
