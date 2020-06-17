import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie Card should return a value that match card title(movie title) when it hovered and empty string when it unhovered`, () => {

  const testState = {
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
        movieTitle={testState.title}
        moviePreview = {testState.preview}
        onMovieCardHover = {testState.hoverHandler}
        onMovieCardUnhover = {testState.unhoverHandler}
        onMovieCardClick = {testState.clickHandler}
      />
  );

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);
  movieCard.simulate(`click`);

  expect(testState.hoverHandler.mock.calls.length).toBe(1);
  expect(testState.unhoverHandler.mock.calls.length).toBe(1);
  expect(testState.clickHandler.mock.calls.length).toBe(1);
  expect(testState.hoverHandler.mock.results[0].value).toBe(testState.title);
  expect(testState.unhoverHandler.mock.results[0].value).toBe(testState.emptyString);
});
