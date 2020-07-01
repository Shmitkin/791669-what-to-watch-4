import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";
import {movies, movie} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should MovieInfo render correctly`, () => {

  const store = mockStore({
    activeMovie: movie,
    movies
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieInfo />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
