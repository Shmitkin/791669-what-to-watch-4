import {extend} from "../../utils.js";
import {AuthorizationStatus} from "../../consts.js";
import UserModel from "../../models/user.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  profile: {},
};

const ActionType = {
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  SET_USER_PROFILE: `SET_USER_PROFILE`,
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
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
