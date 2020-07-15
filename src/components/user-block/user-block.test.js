import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import {UserBlock} from "./user-block.jsx";
import {AuthorizationStatus} from "../../consts.js";


it(`Should UserBlock render correctly`, () => {

  const tree = renderer
    .create(
        <Router>
          <UserBlock
            authStatus={AuthorizationStatus.AUTH}
            user={{avatarUrl: `avatarUrl`}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
