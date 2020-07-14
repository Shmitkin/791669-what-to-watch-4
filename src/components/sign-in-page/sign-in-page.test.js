import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import SignInPage from "./sign-in-page.jsx";
import {AuthorizationStatus} from "../../consts.js";

const mockStore = configureStore([]);

it(`Should UserBlock render correctly`, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(
        <Router>
          <Provider store = {store}>
            <SignInPage />
          </Provider>
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
