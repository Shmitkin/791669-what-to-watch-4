import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testState = {
  mainMovie:
  {title: `Stranger Things`,
    genre: `Thriller`,
    release: 2017
  },
  genres: [
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
  ],
  movies: [
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
  ]
};

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          mainMovie = {testState.mainMovie}
          movies = {testState.movies}
          genres = {testState.genres}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
