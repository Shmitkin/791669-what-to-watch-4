import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import history from "../history.js";

import {getMovieById} from "../reducer/data/selectors.js";
import {AppRoute} from "../consts.js";

const calculateRemainingTime = (duration, currentTime) => {
  return Math.floor(duration - currentTime);

};

const calculateProgress = (duration, currentTime) => {
  return currentTime / duration * 100;
};


export default function withVideoPlayerControls(Component) {
  class WithVideoPlayerControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0,
        remaining: 0,
      };
      this._videoRef = createRef();

      this._duration = 0;
      this._video = null;
      this._movie = this.props.movie;

      this._onPlayButtonClickHandler = this._onPlayButtonClickHandler.bind(this);
      this._onPauseButtonClickHandler = this._onPauseButtonClickHandler.bind(this);
      this._onFullscreenButtonClickHandler = this._onFullscreenButtonClickHandler.bind(this);
      this._onExitButtonClickHandler = this._onExitButtonClickHandler.bind(this);

      this._onCanPlayThroughHandler = this._onCanPlayThroughHandler.bind(this);
      this._onTimeUpdateHandler = this._onTimeUpdateHandler.bind(this);
    }

    componentDidMount() {
      this._video = this._videoRef.current;

      this._video.addEventListener(`timeupdate`, this._onTimeUpdateHandler);
      this._video.addEventListener(`canplaythrough`, this._onCanPlayThroughHandler);
    }

    componentWillUnmount() {
      this._video.removeEventListener(`timeupdate`, this._onTimeUpdateHandler);
      this._video.removeEventListener(`canplaythrough`, this._onCanPlayThroughHandler);
      this._videoRef = null;
    }

    _onFullscreenButtonClickHandler() {
      if (this._video.requestFullscreen) {
        this._video.requestFullscreen();
      } else if (this._video.mozRequestFullScreen) { /* Firefox */
        this._video.mozRequestFullScreen();
      } else if (this._video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        this._video.webkitRequestFullscreen();
      } else if (this._video.msRequestFullscreen) { /* IE/Edge */
        this._video.msRequestFullscreen();
      }
    }

    _onCanPlayThroughHandler() {
      this._duration = this._video.duration;
      this._onTimeUpdateHandler();
    }

    _onPlayButtonClickHandler() {
      this._video.play();
      this.setState({
        isPlaying: true
      });
    }

    _onPauseButtonClickHandler() {
      this._video.pause();
      this.setState({
        isPlaying: false
      });
    }

    _onExitButtonClickHandler() {
      this._video.load();
      this.setState({
        isPlaying: false
      });
      history.push(`${AppRoute.FILMS}/${this._movie.id}`);
    }

    _onTimeUpdateHandler() {
      this.setState({
        progress: calculateProgress(this._duration, this._video.currentTime),
        remaining: calculateRemainingTime(this._duration, this._video.currentTime)
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          movie={this._movie}
          videoRef={this._videoRef}
          progress={this.state.progress}
          remaining={this.state.remaining}
          isPlaying={this.state.isPlaying}
          onExitButtonClickHandler={this._onExitButtonClickHandler}
          onPauseButtonClickHandler={this._onPauseButtonClickHandler}
          onPlayButtonClickHandler={this._onPlayButtonClickHandler}
          onFullscreenButtonClickHandler={this._onFullscreenButtonClickHandler}
        />
      );
    }
  }

  WithVideoPlayerControls.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  };


  const mapStateToProps = (state, props) => ({
    movie: getMovieById(state, props.match.params.id)
  });

  return connect(mapStateToProps)(WithVideoPlayerControls);
}
