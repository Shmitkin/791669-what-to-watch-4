import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import PageHeader from "./page-header.jsx";


it(`Should PageHeader render correctly`, () => {

  const tree = renderer
    .create(
        <Router>
          <PageHeader />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
