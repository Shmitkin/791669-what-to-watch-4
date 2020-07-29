import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

import {MyListPage} from "./my-list-page.jsx";
import {mockStore} from "../../test-state.js";
import {AuthorizationStatus} from "../../consts.js";

const testStore = configureStore();
const store = testStore(mockStore);

it(`Should MyListPage render correctly`, () => {

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store = {store}>
            <MyListPage
              userFavoriteMovies ={[]}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              loadUserFavoriteMovies={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
