import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

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

it(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          movies = {testState}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
