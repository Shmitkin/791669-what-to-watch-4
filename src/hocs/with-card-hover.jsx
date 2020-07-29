import React, {PureComponent} from "react";

export default function withCardHover(Component) {
  return class WithCardHover extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this._timeout = null;
      this._video = null;

      this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
      this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
    }

    componentDidMount() {
      this._video = this._videoRef.current;
    }

    componentWillUnMount() {
      this._videoRef = null;
    }

    _mouseEnterHandler() {
      this._timeout = setTimeout(() => {
        this._video.play();
      }, 1000);
    }

    _mouseLeaveHandler() {
      clearTimeout(this._timeout);
      this._video.load();
    }

    componentWillUnmount() {
      clearTimeout(this._timeout);
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef = {this._videoRef}
          onHover = {this._mouseEnterHandler}
          onUnhover = {this._mouseLeaveHandler}
        />
      );
    }
  };
}
