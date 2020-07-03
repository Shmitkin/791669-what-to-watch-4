import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function UserBlock(props) {
  const {isAuth} = props;

  const checkAuth = () => {
    if (isAuth) {
      return (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>);
    } else {
      return <Link to="/login" className="user-block__link">Sign in</Link>;
    }
  };

  return (
    <div className="user-block">
      {checkAuth()}
    </div>
  );
}

UserBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  isAuth: state.isUserAuth
});

export default connect(mapStateToProps)(UserBlock);

