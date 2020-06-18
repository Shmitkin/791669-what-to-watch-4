import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all movie cards titles be pressed`, () => {
  const onMovieCardTitleClick = jest.fn();

  const mainScreen = mount(
      <MainScreen
        mainMovieTitle = {`Stranger Things`}
        mainMovieGenre = {`Thriller, Comedy`}
        mainMovieReleaseDate = {2017}
        movieTitles = {[`First Movie`, `Second Moviem`, `Third Movie`]}
        movieCardTitleHandler = {onMovieCardTitleClick}
      />
  );

  const movieCardTitles = mainScreen.find(`.small-movie-card__link`);

  movieCardTitles.at(0).simulate(`click`);
  movieCardTitles.at(1).simulate(`click`);
  movieCardTitles.at(2).simulate(`click`);

  expect(onMovieCardTitleClick.mock.calls.length).toBe(3);
});
