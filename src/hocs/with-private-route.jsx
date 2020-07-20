import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../consts.js";
import {getAuthorizationStatus} from "../reducer/user/selectors.js";

export default function withPrivateRoute(Component) {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    _checkAuthorization() {
      const {authorizationStatus} = this.props;
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to={AppRoute.LOGIN} />;
      }
    }

    render() {
      return this._checkAuthorization();
    }
  }


  WithPrivateRoute.propTypes = {
    authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus))
  };

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
}
