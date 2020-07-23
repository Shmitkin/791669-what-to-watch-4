import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import SignInForm from "../sign-in-form/sign-in-form.jsx";

import withSignInFormValidation from "../../hocs/with-sign-in-form-validation.jsx";
import {AuthorizationStatus} from "../../consts.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";


const WrappedSignInForm = withSignInFormValidation(SignInForm);


function SignInPage({authorizationStatus, loginUser}) {

  const onFormSubmit = (authData) => {
    loginUser(authData);
  };


  switch (authorizationStatus) {
    case AuthorizationStatus.AUTH:
      return <Redirect from="/login" to="/" />;
    case AuthorizationStatus.NO_AUTH:
      return (
        <div className="user-page">
          <PageHeader extraClass={`user-page__head`}>
            <h1 className="page-title user-page__title">Sign in</h1>
          </PageHeader>
          <div className="sign-in user-page__content">
            <WrappedSignInForm onFormSubmit={onFormSubmit}/>
          </div>
          <PageFooter />
        </div>
      );
  }
}

SignInPage.propTypes = {
  authorizationStatus: PropTypes.oneOf(
      Object.values(AuthorizationStatus)
  ),
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loginUser(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);


