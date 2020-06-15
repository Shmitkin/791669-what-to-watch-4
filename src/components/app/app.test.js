import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          mainMovieTitle = {`Stranger Things`}
          mainMovieGenre = {`Thriller, Comedy`}
          mainMovieReleaseDate = {2017}
          movieTitles = {[`First Movie`, `Second Moviem`, `Third Movie`]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
