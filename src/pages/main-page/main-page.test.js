import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from 'react-router-dom';

import {MainPage} from "./main-page.jsx";
import {mockStore, movie, movies, genres} from "../../test-state.js";

it(`Should MainPage render correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer
    .create(
        <Router>
          <Provider store = {store}>
            <MainPage
              promoMovie={movie}
              movies={movies}
              activeTab={`All genres`}
              showingMoviesCount={8}
              onShowMoreButtonCLick={()=>{}}
              onGenreClick={()=>{}}
              onTabClick={()=>{}}
              genres={genres}
              isPromoMovieLoaded={true}
              isMoviesLoaded={true}
            />
          </Provider>
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
