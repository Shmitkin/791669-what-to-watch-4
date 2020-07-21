import React, {createRef} from "react";
import {connect} from "react-redux";

import VideoPlayer from "../video-player/video-player.jsx";
import VideoPlayerTimeline from "../video-player-timeline/video-player-timeline.jsx";
import VideoPlayerPlayButton from "../video-player-play-button/video-player-play-button.jsx";
import VideoPlayerPauseButton from "../video-player-pause-button/video-player-pause-button.jsx";

import {getMovieById} from "../../reducer/data/selectors.js";


const calculateRemainingTime = (duration, currentTime) => {
  return Math.floor(duration - currentTime);

};

const calculateProgress = (duration, currentTime) => {
  return currentTime / duration * 100;
};

class VideoPlayerPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      progress: 0,
      remaining: 0,
    };

    this._duration = 0;

    this._videoRef = createRef();
    this._onPlayButtonClickHandler = this._onPlayButtonClickHandler.bind(this);
    this._onPauseButtonClickHandler = this._onPauseButtonClickHandler.bind(this);
    this._onCanPlayThroughHandler = this._onCanPlayThroughHandler.bind(this);
    this._setCurrentTime = this._setCurrentTime.bind(this);
    this._updateControls = this._updateControls.bind(this);
    this._openFullscreen = this._openFullscreen.bind(this);
  }

  _openFullscreen() {
    if (this._videoRef.current.requestFullscreen) {
      this._videoRef.current.requestFullscreen();
    } else if (this._videoRef.current.mozRequestFullScreen) { /* Firefox */
      this._videoRef.current.mozRequestFullScreen();
    } else if (this._videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      this._videoRef.current.webkitRequestFullscreen();
    } else if (this._videoRef.current.msRequestFullscreen) { /* IE/Edge */
      this._videoRef.current.msRequestFullscreen();
    }
  }

  _onCanPlayThroughHandler() {
    this._duration = this._videoRef.current.duration;
    this._updateControls();
  }

  _onPlayButtonClickHandler() {
    this._videoRef.current.play();
    this.setState({
      isPlaying: true
    });
  }

  _onPauseButtonClickHandler() {
    this._videoRef.current.pause();
    this.setState({
      isPlaying: false
    });
  }

  _updateControls() {
    const {currentTime} = this._videoRef.current;
    const duration = this._duration;
    this.setState({
      progress: calculateProgress(duration, currentTime),
      remaining: calculateRemainingTime(duration, currentTime)
    });
  }

  _setCurrentTime() {
    this._videoRef.current.currentTime = 200;
  }

  render() {
    const {videoFull, preview, title} = this.props.movie;
    return (
      <div className="player">

        <VideoPlayer
          src={videoFull}
          poster={preview}
          muted={true}
          extraClass={`player__video`}
          videoRef={this._videoRef}
          onTimeUpdate={this._updateControls}
          onCanPlayThrough={this._onCanPlayThroughHandler}
        />

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">

          <VideoPlayerTimeline progress={this.state.progress} remaining={this.state.remaining} />

          <div className="player__controls-row">

            {this.state.isPlaying
              ? <VideoPlayerPauseButton onClick={this._onPauseButtonClickHandler} />
              : <VideoPlayerPlayButton onClick={this._onPlayButtonClickHandler} disabled={false} />
            }

            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen" onClick={this._openFullscreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.match.params.id)
});


export {VideoPlayerPage};
export default connect(mapStateToProps)(VideoPlayerPage);
