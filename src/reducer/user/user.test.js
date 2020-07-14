import {reducer, ActionType, Operation} from "./user.js";
import {AuthorizationStatus} from "../../consts.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import UserModel from "../../models/user.js";
import MovieModel from "../../models/movie.js";

describe(`Reducer should work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
      favoriteMovies: [],
    });
  });

  it(`Reducer should set authorization status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
      favoriteMovies: [],
    }, {
      type: ActionType.SET_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      profile: {},
      favoriteMovies: [],
    });
  });

  it(`Reducer should set user profile`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
      favoriteMovies: [],
    }, {
      type: ActionType.SET_USER_PROFILE,
      payload: {name: `user name`},
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {name: `user name`},
      favoriteMovies: [],
    });
  });

  it(`Reducer should set user favorite movies`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
      favoriteMovies: [],
    }, {
      type: ActionType.SET_USER_FAVORITE_MOVIES,
      payload: [{id: 131}, {id: `movieId`}]
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
      favoriteMovies: [{id: 131}, {id: `movieId`}],
    });
  });

});

describe(`Operations should work correctly`, () => {
  const api = createAPI(() => {});
  const apiMock = new MockAdapter(api);
  const mockUser = {"id": 323, "email": `mail`, "name": `name`, "avatar_url": `avatarUrl`};
  const mockLoginFormData = {email: `email`, password: `1234d`};
  const expectedUserProfileInStore = UserModel.parseUser(mockUser);

  it(`Should make a correct API GET call to /login`, () => {
    const checkAuthGetter = Operation.checkAuth();
    const dispatch = jest.fn();

    apiMock
    .onGet(`/login`)
    .reply(200, mockUser);

    return checkAuthGetter(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_USER_PROFILE,
        payload: expectedUserProfileInStore,
      });
    });
  });

  it(`Should make a correct API POST call to /login`, () => {
    const loginSetter = Operation.login(mockLoginFormData);
    const dispatch = jest.fn();

    apiMock
    .onPost(`/login`)
    .reply(200, mockUser);

    return loginSetter(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_USER_PROFILE,
        payload: expectedUserProfileInStore
      });
    });
  });

  it(`Should make a correct API call to /favorites`, () => {
    const favoriteMovieLoader = Operation.loadFavoriteMovies();
    const dispatch = jest.fn();
    const mockMovies = [{id: 123}, {id: 43}];
    const expectedMoviesInStore = MovieModel.parseMovies(mockMovies);

    apiMock
    .onGet(`/favorite`)
    .reply(200, mockMovies);

    return favoriteMovieLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER_FAVORITE_MOVIES,
        payload: expectedMoviesInStore,
      });
    });
  });

});
