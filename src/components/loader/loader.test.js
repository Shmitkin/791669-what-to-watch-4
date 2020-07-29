import React from "react";
import renderer from "react-test-renderer";

import {Loader} from "./loader.jsx";
import {DataLoadStatus} from "../../consts.js";

it(`Should Loader render correctly`, () => {

  const tree = renderer
    .create(
        <Loader isDataLoaded={()=>{
          return true;
        }}
        requiredData={[DataLoadStatus.MOVIES, DataLoadStatus.PROMO_MOVIE]}>

          <div>Test</div>

        </Loader>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
