import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {movie, movies} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should MainScreen render correctly`, () => {
  const store = mockStore({
    activeMovie: movie,
    movies,
    mainMovie: movie,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <MainScreen />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
