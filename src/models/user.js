import {BASE_URL} from "../consts.js";

const DUPLICATE_URL_SYMBOLS_COUNT = 4;

export default class UserModel {
  constructor(user) {
    this.id = user[`id`].toString();
    this.email = user[`email`];
    this.name = user[`name`];
    this.avatarUrl = BASE_URL + user[`avatar_url`].slice(DUPLICATE_URL_SYMBOLS_COUNT);
  }

  static parseUser(user) {
    return new UserModel(user);
  }

  static parseLogin(login) {
    return {
      "email": login.email,
      "password": login.password.toString(),
    };
  }
}
