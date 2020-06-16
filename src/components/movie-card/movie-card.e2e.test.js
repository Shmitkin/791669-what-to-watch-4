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
    movieCardHoverHandler: jest.fn(() => {
      return testState.title;
    }),
    movieCardUnhoverHandler: jest.fn(() => {
      return testState.emptyString;
    }),
    emptyString: ``
  };

  const movieCard = shallow(
      <MovieCard
        movieTitle={testState.title}
        moviePreview = {testState.preview}
        onMovieCardHover = {testState.movieCardHoverHandler}
        onMovieCardUnhover = {testState.movieCardUnhoverHandler}
      />
  );

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);

  expect(testState.movieCardHoverHandler.mock.calls.length).toBe(1);
  expect(testState.movieCardUnhoverHandler.mock.calls.length).toBe(1);

  expect(testState.movieCardHoverHandler.mock.results[0].value).toBe(testState.title);
  expect(testState.movieCardUnhoverHandler.mock.results[0].value).toBe(testState.emptyString);
});
