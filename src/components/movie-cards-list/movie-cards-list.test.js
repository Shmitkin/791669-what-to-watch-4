import React from "react";
import renderer from "react-test-renderer";
import MovieCardsList from "./movie-cards-list.jsx";

const testState = [
  {
    title: `First Film`,
    preview: `img/first-film.jpg`
  },
  {
    title: `Second Film`,
    preview: `img/second-film.jpg`
  },
  {
    title: `Third Film`,
    preview: `img/third-film.jpg`
  },
  {
    title: `Fourth Film`,
    preview: `img/fourth-film.jpg`
  }
];

it(`Should MovieCardsList render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardsList
          movies = {testState}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
