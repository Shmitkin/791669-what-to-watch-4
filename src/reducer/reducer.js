const extend = (a, b) => {
  return Object.assign({}, a, b);
};

import {Movies} from "../consts.js";

const initialState = {
  movies: [],
  mainMovie: {},
  isUserAuth: false,
  showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
};

const ActionType = {
  SET_MOVIES: `SET_MOVIES`,
  SET_MAIN_MOVIE: `SET_MAIN_MOVIE`,
  SET_USER_AUTH: `SET_USER_AUTH`,
  INCREASE_MOVIES_SHOWING_COUNT: `INCREASE_MOVIES_SHOWING_COUNT`,
  RESET_MOVIES_SHOWING_COUNT: `RESET_MOVIES_SHOWING_COUNT`,

};

export const ActionCreator = {

  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies,
  }),

  setMainMovie: (movie) => ({
    type: ActionType.SET_MAIN_MOVIE,
    payload: movie,
  }),
  setUserAuth: () => ({
    type: ActionType.SET_USER_AUTH,
    payload: true,
  }),

  increaseMoviesShowingCount: () => ({
    type: ActionType.INCREASE_MOVIES_SHOWING_COUNT,
    payload: Movies.SHOW_MORE_COUNT,
  }),

  resetMoviesShowingCount: () => ({
    type: ActionType.RESET_MOVIES_SHOWING_COUNT,
    payload: Movies.DEFAULT_SHOW_COUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.SET_MAIN_MOVIE:
      return extend(state, {
        mainMovie: action.payload,
      });
    case ActionType.SET_USER_AUTH:
      return extend(state, {
        isUserAuth: action.payload
      });
    case ActionType.INCREASE_MOVIES_SHOWING_COUNT:
      return extend(state, {
        showingMoviesCount: state.showingMoviesCount + action.payload
      });
    case ActionType.RESET_MOVIES_SHOWING_COUNT:
      return extend(state, {
        showingMoviesCount: action.payload
      });
  }
  return state;
};


export {reducer, ActionType};
