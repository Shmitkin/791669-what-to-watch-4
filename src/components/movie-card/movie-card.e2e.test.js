import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {movie} from "../../test-state.js";
import {BrowserRouter as Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie Card should call every handler for 1 time when it hovered and unhovered`, () => {
  const mockRef = React.createRef();
  const hoverHandler = jest.fn(() => {});
  const unhoverHandler = jest.fn(() => {});

  const movieCard = mount(
      <Router>
        <MovieCard
          videoRef = {mockRef}
          movie = {movie}
          onHover = {hoverHandler}
          onUnhover = {unhoverHandler}
        />
      </Router>
  );


  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);

  expect(hoverHandler.mock.calls.length).toBe(1);
  expect(unhoverHandler.mock.calls.length).toBe(1);
});
