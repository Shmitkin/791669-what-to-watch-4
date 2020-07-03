import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {movie, movies} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);


it(`Should App render correctly`, () => {

  const store = mockStore({
    activeMovie: null,
    movies,
    mainMovie: movie,
    isUserAuth: false,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
