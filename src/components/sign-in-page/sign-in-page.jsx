import React from "react";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import SignInForm from "../sign-in-form/sign-in-form.jsx";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import withFormValidation from "../../hocs/with-form-validation.jsx";

const WrappedSignInForm = withFormValidation(SignInForm);

export function SignInPage({isAuth}) {

  if (isAuth) {
    return <Redirect from="/login" to="/" />;
  } else {
    return (
      <div className="user-page">
        <PageHeader extraClass={`user-page__head`}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </PageHeader>
        <div className="sign-in user-page__content">
          <WrappedSignInForm />
        </div>
        <PageFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.isUserAuth
});

export default connect(mapStateToProps)(SignInPage);


