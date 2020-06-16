import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          mainMovieTitle = {`Stranger Things`}
          mainMovieGenre = {`Thriller, Comedy`}
          mainMovieReleaseDate = {2017}
          movies = {testState}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
