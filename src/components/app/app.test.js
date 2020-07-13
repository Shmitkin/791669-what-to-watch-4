import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {movie, movies} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../consts.js";

const mockStore = configureStore([]);


it(`Should App render correctly`, () => {

  const store = mockStore({
    DATA: {
      movies,
      promoMovie: movie,
    },
    MAIN: {
      showingMoviesCount: 8,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
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
