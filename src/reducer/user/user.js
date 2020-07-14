import {extend} from "../../utils.js";
import {AuthorizationStatus} from "../../consts.js";
import UserModel from "../../models/user.js";
import MovieModel from "../../models/movie.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  profile: {},
  favoriteMovies: [],
};

const ActionType = {
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  SET_USER_PROFILE: `SET_USER_PROFILE`,
  SET_USER_FAVORITE_MOVIES: `SET_USER_FAVORITE_MOVIES`,
};

const ActionCreator = {
  setAuthorization: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: status,
    };
  },
  setUserProfile: (profile) => {
    return {
      type: ActionType.SET_USER_PROFILE,
      payload: profile
    };
  },
  setUserFavoriteMovies: (movies) => {
    return {
      type: ActionType.SET_USER_FAVORITE_MOVIES,
      payload: movies,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_PROFILE:
      return extend(state, {
        profile: action.payload,
      });
    case ActionType.SET_USER_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserProfile(UserModel.parseUser(data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, UserModel.parseLogin(authData))
      .then(({data}) => {
        dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserProfile(UserModel.parseUser(data)));
      });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.setUserFavoriteMovies(MovieModel.parseMovies(data)));
      });
  }
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
