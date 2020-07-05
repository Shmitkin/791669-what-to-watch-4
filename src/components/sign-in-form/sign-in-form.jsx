import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import PropTypes from "prop-types";

export class SignInForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
      emailValidity: true,
      passValidity: true,
    };

    this._inputEmailRef = React.createRef();
    this._inputPassRef = React.createRef();

    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onEmailFocus = this._onEmailFocus.bind(this);
    this._onPassFocus = this._onPassFocus.bind(this);
  }

  _isEmailCorrect() {
    const email = this._inputEmailRef;
    const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return (emailPattern.test(email.current.value));
  }

  _isPasswordTyped() {
    const password = this._inputPassRef;
    if (password.current.value) {
      return true;
    } else {
      return false;
    }
  }

  _checkValidity(emailValidity, passValidity) {
    if (!emailValidity && !passValidity) {
      this.setState({
        errorMessage: `Please enter a valid email address and your password`,
        emailValidity: false,
        passValidity: false,
      });
    } else if (!emailValidity) {
      this.setState({
        errorMessage: `Please enter a valid email address`,
        emailValidity: false,
        passValidity: true,
      });
    } else if (!passValidity) {
      this.setState({
        errorMessage: `Please enter your password`,
        emailValidity: true,
        passValidity: false,
      });
    } else {
      this.setState({
        errorMessage: null,
        emailValidity: true,
        passValidity: true,
      });

    }
  }

  _createErrorMessage() {
    if (this.state.errorMessage) {
      return (
        <div className="sign-in__message">
          <p>{this.state.errorMessage}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  _onEmailFocus() {
    this.setState({
      emailValidity: true
    });
  }

  _onPassFocus() {
    this.setState({
      passValidity: true
    });
  }

  _onFormSubmit(evt) {
    evt.preventDefault();

    this._checkValidity(this._isEmailCorrect(), this._isPasswordTyped());

    if (this._isEmailCorrect() && this._isPasswordTyped()) {
      this.props.loginUser();
    }
  }


  render() {
    return (
      <form className="sign-in__form" onSubmit={this._onFormSubmit} noValidate={true}>
        {this._createErrorMessage()}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${this.state.emailValidity ? `` : `sign-in__field--error`}`}>
            <input ref={this._inputEmailRef} onFocus={this._onEmailFocus}
              className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={`sign-in__field ${this.state.passValidity ? `` : `sign-in__field--error`}`}>
            <input ref={this._inputPassRef} onFocus={this._onPassFocus}
              className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser() {
    dispatch(ActionCreator.setUserAuth());
  }
});

export default connect(null, mapDispatchToProps)(SignInForm);


