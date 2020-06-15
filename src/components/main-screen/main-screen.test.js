import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(
        <MainScreen
          mainMovieTitle = {`Stranger Things`}
          mainMovieGenre = {`Thriller, Comedy`}
          mainMovieReleaseDate = {2017}
          movieTitles = {[`First Movie`, `Second Moviem`, `Third Movie`]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
