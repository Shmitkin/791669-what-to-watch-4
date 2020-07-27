import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

import {AuthorizationStatus} from "../../consts.js";
import {MovieInfoPage} from "./movie-info-page.jsx";
import {mockStore, movie, comments} from "../../test-state.js";

it(`Should MovieInfoPage render correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <MovieInfoPage
              onTabClick ={()=>{}}
              activeTab={`active`}
              movie={movie}
              reviews={comments}
              similarMovies={[]}
              loadReviews={() => {}}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
