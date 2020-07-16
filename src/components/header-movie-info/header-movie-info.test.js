import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import HeaderMovieInfo from "./header-movie-info.jsx";
import {mockStore, movie} from "../../test-state.js";

it(`Should HeaderMovieInfo render correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <HeaderMovieInfo
            movie = {movie}
            isMovieDetails = {false}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
