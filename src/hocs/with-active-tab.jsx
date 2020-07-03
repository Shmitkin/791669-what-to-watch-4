import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default function withActiveTab(Component, activeTab) {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab,
      };

      this._onTabClick = this._onTabClick.bind(this);
    }

    _onTabClick(tabTitle) {
      this.setState({
        activeTab: tabTitle
      });
      this.props.onClick(tabTitle);
    }

    render() {
      return (
        <Component
          {...this.props}
          onClick = {this._onTabClick}
          activeTab = {this.state.activeTab}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  return WithActiveTab;
}
