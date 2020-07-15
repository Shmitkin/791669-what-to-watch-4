import {getAuthorizationStatus, getUserProfile} from "./selectors.js";

const mockState = {
  USER: {
    authorizationStatus: `NO_AUTH`,
    profile: {name: `userName`},
  }
};


describe(`Simple Selectors will return a value from state`, () => {
  it(`getAuthorizationStatus will return a value from state`, () => {
    expect(getAuthorizationStatus(mockState)).toEqual(mockState.USER.authorizationStatus);
  });

  it(`getUserProfile will return a value from state`, () => {
    expect(getUserProfile(mockState)).toEqual(mockState.USER.profile);
  });
});
