import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../consts.js";
import {getAuthorizationStatus, getUserProfile} from "../../reducer/user/selectors.js";


function UserBlock(props) {
  const {authStatus, user} = props;

  const renderUserBlock = () => {
    if (authStatus === AuthorizationStatus.AUTH) {
      const {avatarUrl} = user;
      return (
        <div className="user-block__avatar">
          <Link to="/mylist">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>);
    } else {
      return <Link to="/login" className="user-block__link">Sign in</Link>;
    }
  };

  return (
    <div className="user-block">
      {renderUserBlock()}
    </div>
  );
}

UserBlock.propTypes = {
  authStatus: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
  })
};


const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  user: getUserProfile(state),
});

export default connect(mapStateToProps)(UserBlock);

