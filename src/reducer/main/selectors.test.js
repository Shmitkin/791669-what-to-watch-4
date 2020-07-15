import {getActiveGenre, getActiveMovieId, getShowingMovieCount} from "./selectors.js";

const mockState = {
  MAIN: {showingMoviesCount: 24}
};

const mockProps = {
  activeTab: `activeGenre`,
  match: {
    params: {
      id: `43`
    }
  }
};

describe(`Simple Selectors will return a value from state or props`, () => {

  it(`getShowingMovieCount will return showing movies count from state`, () => {
    expect(getShowingMovieCount(mockState)).toEqual(mockState.MAIN.showingMoviesCount);
  });

  it(`getActiveMovieId will return id of active movie from props`, () => {
    expect(getActiveMovieId(mockState, mockProps)).toEqual(mockProps.match.params.id);
  });

  it(`getActiveGenre will return active genre from props`, () => {
    expect(getActiveGenre(mockState, mockState)).toEqual(mockState.activeTab);
  });
});
