import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

it(`Should PageFooter render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <PageFooter />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
