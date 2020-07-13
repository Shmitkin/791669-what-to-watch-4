import {extend} from "../../utils.js";
import MovieModel from "../../models/movie.js";
import CommentModel from "../../models/comment.js";

const initialState = {
  movies: [],
  promoMovie: {},
  comments: [],
};

const ActionType = {
  SET_MOVIES: `SET_MOVIES`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
  SET_COMMENTS: `SET_COMMENTS`,
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
  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments,
  })
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
  },

  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`comments/${filmId}`)
    .then((response) => {
      dispatch(ActionCreator.setComments(CommentModel.parseComments(response.data)));
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
    case ActionType.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }
  return state;
};


export {reducer, ActionType, Operation};

