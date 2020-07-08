import {reducer, ActionType} from "./reducer.js";
import {movies, movie} from "../test-state.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 8,
  });
});

it(`Reducer should set movies when data received`, () => {
  expect(reducer({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 8,
  }, {
    type: ActionType.SET_MOVIES,
    payload: movies,
  })).toEqual({
    movies,
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 8,
  });
});

it(`Reducer should set mainMovie when data received`, () => {
  expect(reducer({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 8,
  }, {
    type: ActionType.SET_MAIN_MOVIE,
    payload: movie,
  })).toEqual({
    movies: [],
    mainMovie: movie,
    isUserAuth: false,
    showingMoviesCount: 8,
  });
});

it(`Reducer should increase showingCount by SHOW MORE COUNT`, () => {
  expect(reducer({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 8,
  }, {
    type: ActionType.INCREASE_MOVIES_SHOWING_COUNT,
    payload: 5,
  })).toEqual({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 13,
  });
});

it(`Reducer should set ShowingCount to default`, () => {
  expect(reducer({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 34,
  }, {
    type: ActionType.RESET_MOVIES_SHOWING_COUNT,
    payload: 6
  })). toEqual({
    movies: [],
    mainMovie: {},
    isUserAuth: false,
    showingMoviesCount: 6,
  });
});

