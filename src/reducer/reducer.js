import MovieModel from "../models/movie.js";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

import {Movies} from "../consts.js";

const initialState = {
  movies: [],
  promoMovie: {},
  isUserAuth: false,
  showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
};

const ActionType = {
  SET_MOVIES: `SET_MOVIES`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
  SET_USER_AUTH: `SET_USER_AUTH`,
  INCREASE_MOVIES_SHOWING_COUNT: `INCREASE_MOVIES_SHOWING_COUNT`,
  RESET_MOVIES_SHOWING_COUNT: `RESET_MOVIES_SHOWING_COUNT`,

};

export const ActionCreator = {

  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies,
  }),

  setPromoMovie: (movie) => ({
    type: ActionType.SET_PROMO_MOVIE,
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

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setMovies(MovieModel.parseMovies(response.data)));
      });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.setPromoMovie(MovieModel.parseMovie(response.data)));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.SET_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
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


export {reducer, ActionType, Operation};
