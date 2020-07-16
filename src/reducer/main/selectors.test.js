import {getShowingMovieCount} from "./selectors.js";

const mockState = {
  MAIN: {showingMoviesCount: 24}
};

describe(`Simple Selectors will return a value from state or props`, () => {

  it(`getShowingMovieCount will return showing movies count from state`, () => {
    expect(getShowingMovieCount(mockState)).toEqual(mockState.MAIN.showingMoviesCount);
  });
});
