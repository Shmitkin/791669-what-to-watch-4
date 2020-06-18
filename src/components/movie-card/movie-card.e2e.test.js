import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card title be pressed`, () => {
  const onMovieCardTitleClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movieTitle={`Stranger Things`}
        onMovieCardTitleClick = {onMovieCardTitleClick}
      />
  );

  const movieCardTitle = movieCard.find(`.small-movie-card__link`);

  movieCardTitle.simulate(`click`);

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
