import {reducer, ActionType, Operation} from "./user.js";
import {AuthorizationStatus} from "../../consts.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import UserModel from "../../models/user.js";

describe(`Reducer should work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
    });
  });

  it(`Reducer should set authorization status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
    }, {
      type: ActionType.SET_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      profile: {},
    });
  });

  it(`Reducer should set user profile`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {},
    }, {
      type: ActionType.SET_USER_PROFILE,
      payload: {name: `user name`},
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      profile: {name: `user name`},
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

    loginSetter(dispatch, () => {}, api)
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

});
