import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {movie, movies} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

it(`Should MainScreen render correctly`, () => {
  const store = mockStore({
    activeMovie: movie,
    movies,
    mainMovie: movie,
    isUserAuth: true,
  });

  const tree = renderer
    .create(
        <Router>
          <Provider store = {store}>
            <MainScreen />
          </Provider>
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
