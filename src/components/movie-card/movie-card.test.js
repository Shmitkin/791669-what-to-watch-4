import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movieTitle={`Stranger Things`}
          moviePreview = {`img/stranger-thisngs.jpg`}
          onMovieCardHover = {() => {}}
          onMovieCardUnhover = {() => {}}
          onMovieCardClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
