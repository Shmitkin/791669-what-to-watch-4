import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import PageFooter from "./page-footer.jsx";


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
