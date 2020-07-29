import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import createStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";

import {AddReviewPage} from "./add-review-page.jsx";
import {movie, mockStore} from "../../test-state.js";

const testStore = createStore();
const store = testStore(mockStore);

it(`Should AddReviewPage render correctly`, () => {

  const tree = renderer
  .create(
      <BrowserRouter>
        <Provider store={store}>
          <AddReviewPage movie={movie} sendComment={()=>{}}/>
        </Provider>
      </BrowserRouter>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
