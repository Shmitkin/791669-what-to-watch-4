import {BASE_URL} from "../consts.js";

export default class UserModel {
  constructor(user) {
    this.id = user[`id`].toString();
    this.email = user[`email`];
    this.name = user[`name`];
    this.avatarUrl = BASE_URL + user[`avatar_url`].slice(4);
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
