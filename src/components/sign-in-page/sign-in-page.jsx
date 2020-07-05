import React from "react";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import SignInForm from "../sign-in-form/sign-in-form.jsx";

export default function SignInPage() {

  return (
    <div className="user-page">
      <PageHeader extraClass={`user-page__head`}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </PageHeader>
      <div className="sign-in user-page__content">
        <SignInForm />
      </div>
      <PageFooter />
    </div>
  );
}
