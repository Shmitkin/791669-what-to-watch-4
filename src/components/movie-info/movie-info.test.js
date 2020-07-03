import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";
import {movies, movie} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

it(`Should MovieInfo render correctly`, () => {

  const store = mockStore({
    activeMovie: movie,
    movies,
    isUserAuth: true,
  });

  const tree = renderer
    .create(
        <Router>
          <Provider store={store}>
            <MovieInfo />
          </Provider>
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
