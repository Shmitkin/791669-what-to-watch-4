import React from "react";
import renderer from "react-test-renderer";
import PageHeader from "./page-header.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

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
