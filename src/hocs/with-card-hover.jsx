import React, {PureComponent} from "react";

export default function withVideoPlayer(Component) {
  return class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._timeout = null;

      this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
      this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
    }

    _mouseEnterHandler() {
      this._timeout = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }

    _mouseLeaveHandler() {
      clearTimeout(this._timeout);
      this.setState({isPlaying: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onHover={this._mouseEnterHandler}
          onUnhover={this._mouseLeaveHandler}
        />
      );
    }
  };
}
