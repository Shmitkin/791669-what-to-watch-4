import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieInfoNavTab from "./movie-info-nav-tab.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieInfoNavTab should call handler 1 time with tab name`, () => {

  const clickHandler = jest.fn(() => {});

  const movieInfoTab = mount(
      <MovieInfoNavTab
        onClick={clickHandler}
        activeTab={``}
        tabTitle={`tab`}
      />
  );

  movieInfoTab.find(`a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenNthCalledWith(1, `tab`);
});
