import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const InputType = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

const ErrorMessage = {
  ALL: `Please enter a valid email address and your password`,
  EMAIL: `Please enter a valid email address`,
  PASSWORD: `Please enter your password`,
};

export default function withSignInFormValidation(Component) {
  class WithSignInFormValidation extends PureComponent {
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

    _onFormChange(evt) {
      switch (evt.target.type) {
        case InputType.EMAIL:
          this._email = evt.target.value;
          break;
        case InputType.PASSWORD:
          this._pass = evt.target.value;
          break;
      }
    }

    _onInputFocus(evt) {
      switch (evt.target.type) {
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
        this.props.onFormSubmit({
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
          onChange = {this._onFormChange}
          onFocus = {this._onInputFocus}
          errorMessage = {this.state.errorMessage}
          emailValidity = {this.state.emailValidity}
          passValidity = {this.state.passValidity}
        />
      );
    }
  }

  WithSignInFormValidation.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  return WithSignInFormValidation;
}
