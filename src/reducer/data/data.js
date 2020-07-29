import {extend} from "../../utils.js";
import MovieModel from "../../models/movie.js";
import CommentModel from "../../models/comment.js";
import {DataLoadStatus} from "../../consts.js";

const initialState = {
  movies: [],
  promoMovie: {},
  comments: [],
  favoriteMovies: [],
  [DataLoadStatus.MOVIES]: false,
  [DataLoadStatus.PROMO_MOVIE]: false,
};

const ActionType = {
  SET_MOVIES: `SET_MOVIES`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
  SET_COMMENTS: `SET_COMMENTS`,
  SET_USER_FAVORITE_MOVIES: `SET_USER_FAVORITE_MOVIES`,
  CHANGE_MOVIE_FAVORITE_STATUS: `CHANGE_MOVIE_FAVORITE_STATUS`,
  SET_DATA_LOAD_STATUS: `SET_DATA_LOAD_STATUS`,
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
  }),
  setUserFavoriteMovies: (movies) => {
    return {
      type: ActionType.SET_USER_FAVORITE_MOVIES,
      payload: movies,
    };
  },
  changeMovieFavoriteStatus: (movie) => {
    return {
      type: ActionType.CHANGE_MOVIE_FAVORITE_STATUS,
      payload: movie,
    };
  },
  setDataLoadStatus: (dataType, status) => {
    return {
      type: ActionType.SET_DATA_LOAD_STATUS,
      payload: {dataType, status}
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setMovies(MovieModel.parseMovies(response.data)));
        dispatch(ActionCreator.setDataLoadStatus(DataLoadStatus.MOVIES, true));
      });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.setPromoMovie(MovieModel.parseMovie(response.data)));
      dispatch(ActionCreator.setDataLoadStatus(DataLoadStatus.PROMO_MOVIE, true));
    });
  },

  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`comments/${filmId}`)
    .then((response) => {
      dispatch(ActionCreator.setComments(CommentModel.parseComments(response.data)));
    });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.setUserFavoriteMovies(MovieModel.parseMovies(data)));
      });
  },

  changeMovieFavoriteStatus: (movie) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movie.id}/${movie.isFavorite ? 0 : 1}`)
    .then(({data})=> {
      dispatch(ActionCreator.changeMovieFavoriteStatus(MovieModel.parseMovie(data)));
    });
  },

  sendNewComment: (movieId, commentData, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, CommentModel.parseNewComment(commentData))
    .then((response)=> {
      dispatch(ActionCreator.setComments(CommentModel.parseComments(response.data)));
      onSuccess();
    })
    .catch((error) => {
      onError(error);
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
    case ActionType.SET_USER_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload
      });
    case ActionType.CHANGE_MOVIE_FAVORITE_STATUS:
      const movieIndex = state.movies.findIndex((movie) => movie.id === action.payload.id);
      const movies = state.movies.slice(0, movieIndex).concat(action.payload, state.movies.slice(movieIndex + 1));
      const promoMovie = state.promoMovie.id === action.payload.id ? action.payload : state.promoMovie;
      return extend(state, {
        movies,
        promoMovie
      });
    case ActionType.SET_DATA_LOAD_STATUS:
      const {dataType, status} = action.payload;
      return extend(state, {
        [dataType]: status
      });

  }
  return state;
};


export {reducer, ActionType, Operation};

