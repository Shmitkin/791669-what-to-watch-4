import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviesList from "./movies-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movies List state should get a value of a card, whitch currently hovered and state should be empty when no movies cards hovered `, () => {

  const films = [
    {
      title: `Mindhunter`,
      preview: `img/mindhunter.jpg`
    },
    {
      title: `Orlando`,
      preview: `img/orlando.jpg`
    }
  ];

  const emptyState = ``;

  const moviesList = mount(
      <MoviesList
        movies = {films}
      />
  );

  const movieCards = moviesList.find(`.catalog__movies-card`);

  //  movieCards.forEach((node, index) => {
  //    node.simulate(`mouseenter`);
  //    expect(moviesList.state().movie).toBe(films[index].title);
  //    node.simulate(`mouseleave`);
  //    expect(moviesList.state().movie).toBe(emptyState);
  //  });

  movieCards.at(0).simulate(`mouseenter`);
  expect(moviesList.state().movie).toBe(films[0].title);

  movieCards.at(0).simulate(`mouseleave`);
  expect(moviesList.state().movie).toBe(emptyState);

  movieCards.at(1).simulate(`mouseenter`);
  expect(moviesList.state().movie).toBe(films[1].title);

  movieCards.at(1).simulate(`mouseleave`);
  expect(moviesList.state().movie).toBe(emptyState);

});
