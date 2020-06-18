import React, {PureComponent} from "react";

export default class UserBlock extends PureComponent {

  render() {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  }
}
