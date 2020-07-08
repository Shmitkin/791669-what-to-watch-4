import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";
import {movies} from "../../test-state.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter, Route, withRouter} from 'react-router-dom';

const mockStore = configureStore([]);
it(`Should MovieInfo render correctly`, () => {

  const store = mockStore({
    movies,
    isUserAuth: true,
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
