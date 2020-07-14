import {reducer, ActionType} from "./main.js";
import {Movies} from "../../consts.js";

describe(`Reducer should work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
    });
  });

  it(`Reducer should increase showingCount by SHOW MORE COUNT`, () => {
    expect(reducer({
      showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
    }, {
      type: ActionType.INCREASE_MOVIES_SHOWING_COUNT,
      payload: 5,
    })).toEqual({
      showingMoviesCount: Movies.DEFAULT_SHOW_COUNT + 5,
    });
  });

  it(`Reducer should set ShowingCount to default`, () => {
    expect(reducer({
      showingMoviesCount: 45,
    }, {
      type: ActionType.RESET_MOVIES_SHOWING_COUNT,
      payload: Movies.DEFAULT_SHOW_COUNT
    })).toEqual({
      showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
    });
  });

});
