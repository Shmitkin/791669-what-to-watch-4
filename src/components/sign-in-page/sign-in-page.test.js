import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import {SignInPage} from "./sign-in-page.jsx";
import {AuthorizationStatus} from "../../consts.js";
import {mockStore} from "../../test-state.js";

const testStore = configureStore();
const store = testStore(mockStore);

it(`Should SignInPage render correctly when AuthorizationStatus NO_AUTH`, () => {

  const tree = renderer
    .create(
        <Provider store = {store}>
          <Router>
            <SignInPage authorizationStatus={AuthorizationStatus.NO_AUTH} />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
