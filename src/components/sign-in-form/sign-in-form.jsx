import React from "react";
import PropTypes from "prop-types";


const createErrorMessage = (errorMessage) => {
  if (errorMessage) {
    return (
      <div className="sign-in__message">
        <p>{errorMessage}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default function SignInForm({onSubmit, errorMessage, onChange, onFocus, emailValidity, passValidity}) {

  return (
    <form className="sign-in__form"
      noValidate={true}
      onSubmit={onSubmit}
      onChange={(evt) => {
        onChange(evt.target);
      }}>
      {createErrorMessage(errorMessage)}
      <div className="sign-in__fields">
        <div className={`sign-in__field ${emailValidity ? `` : `sign-in__field--error`}`}>
          <input onFocus={(evt) => {
            onFocus(evt.target);
          }}
          className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={`sign-in__field ${passValidity ? `` : `sign-in__field--error`}`}>
          <input onFocus={(evt) => {
            onFocus(evt.target);
          }}
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


SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  emailValidity: PropTypes.bool.isRequired,
  passValidity: PropTypes.bool.isRequired,

};


