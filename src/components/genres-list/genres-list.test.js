import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);


it(`Should GenresList render correctly`, () => {

  const store = mockStore({
    movies: [{genre: `genre`}, {genre: `anotherGenre`}, {genre: `megaGenre`}],
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
