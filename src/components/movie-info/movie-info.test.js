import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {MemoryRouter, Route, withRouter} from 'react-router-dom';

import MovieInfo from "./movie-info.jsx";
import {movies} from "../../test-state.js";
import {AuthorizationStatus} from "../../consts.js";

const mockStore = configureStore([thunk]);

it(`Should MovieInfo render correctly`, () => {

  const store = mockStore({
    DATA: {
      movies,
      comments: {}
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    },
  });


  const MovieInfoWrapped = withRouter(MovieInfo);

  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/films/2323`]}>
          <Provider store={store}>
            <Route path="/films/:id">
              <MovieInfoWrapped
                onTabClick ={()=>{}}
                activeTab={`active`}
              />
            </Route>
          </Provider>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
