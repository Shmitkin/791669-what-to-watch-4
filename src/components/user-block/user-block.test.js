import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

it(`Should UserBlock render correctly`, () => {

  const store = mockStore({
    isUserAuth: false
  });

  const tree = renderer
    .create(
        <Router>
          <Provider store = {store}>
            <UserBlock />
          </Provider>
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
