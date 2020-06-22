import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardsList from "./movie-cards-list.jsx";
import {movies} from "../../test-state.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movies List state should get a value of a card, whitch currently hovered and state should be empty when no movies cards hovered `, () => {

  const movieCardsList = mount(
      <MovieCardsList
        movies = {movies}
        onMovieCardClick = {() => {}}
      />
  );

  const movieCards = movieCardsList.find(`.catalog__movies-card`);

  movieCards.forEach((node, index) => {
    node.simulate(`mouseenter`);
    expect(movieCardsList.state().movie).toBe(movies[index]);
    node.simulate(`mouseleave`);
    expect(movieCardsList.state().movie).toBe(null);
  });
});
