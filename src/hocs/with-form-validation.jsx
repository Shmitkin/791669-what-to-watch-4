import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../reducer/user/user.js";

const InputType = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

const ErrorMessage = {
  ALL: `Please enter a valid email address and your password`,
  EMAIL: `Please enter a valid email address`,
  PASSWORD: `Please enter your password`,
};

export default function withFormValidation(Component) {
  class WithFormValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorMessage: ``,
        emailValidity: true,
        passValidity: true,
      };

      this._email = null;
      this._pass = null;

      this._onFormSubmit = this._onFormSubmit.bind(this);
      this._onFormChange = this._onFormChange.bind(this);
      this._onInputFocus = this._onInputFocus.bind(this);
    }

    _isEmailCorrect() {
      const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      return (emailPattern.test(this._email));
    }

    _isPasswordTyped() {
      if (this._pass) {
        return true;
      } else {
        return false;
      }
    }

    _checkValidity(emailValidity, passValidity) {
      if (!emailValidity && !passValidity) {
        this.setState({
          errorMessage: ErrorMessage.ALL,
          emailValidity: false,
          passValidity: false,
        });
      } else if (!emailValidity) {
        this.setState({
          errorMessage: ErrorMessage.EMAIL,
          emailValidity: false,
          passValidity: true,
        });
      } else if (!passValidity) {
        this.setState({
          errorMessage: ErrorMessage.PASSWORD,
          emailValidity: true,
          passValidity: false,
        });
      } else {
        this.setState({
          errorMessage: ``,
          emailValidity: true,
          passValidity: true,
        });
      }
    }

    _onFormChange(target) {
      switch (target.type) {
        case InputType.EMAIL:
          this._email = target.value;
          break;
        case InputType.PASSWORD:
          this._pass = target.value;
          break;
      }
    }

    _onInputFocus(target) {
      switch (target.type) {
        case InputType.EMAIL:
          this.setState({
            emailValidity: true
          });
          break;
        case InputType.PASSWORD:
          this.setState({
            passValidity: true
          });
          break;
      }
    }

    _onFormSubmit(evt) {
      evt.preventDefault();
      this._checkValidity(this._isEmailCorrect(), this._isPasswordTyped());
      if (this._isEmailCorrect() && this._isPasswordTyped()) {
        this.props.loginUser({
          email: this._email,
          password: this._pass,
        });
      }
    }


    render() {
      return (
        <Component
          {...this.props}
          onSubmit = {this._onFormSubmit}
          errorMessage = {this.state.errorMessage}
          onChange = {this._onFormChange}
          onFocus = {this._onInputFocus}
          emailValidity = {this.state.emailValidity}
          passValidity = {this.state.passValidity}
        />
      );
    }
  }

  WithFormValidation.propTypes = {
    loginUser: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    loginUser(authData) {
      dispatch(UserOperation.login(authData));
    }
  });

  return connect(null, mapDispatchToProps)(WithFormValidation);
}
