import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import {connect} from "react-redux";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMainScreen() {
    const {activeMovie} = this.props;

    if (activeMovie === null) {
      return (
        <MainScreen />
      );
    } else if (activeMovie !== null) {
      return (
        <MovieInfo />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/movie">
            <MovieInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    );

  }
}

App.propTypes = {
  mainMovie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  activeMovie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  mainMovie: state.mainMovie,
  activeMovie: state.activeMovie,
});

export {App};
export default connect(mapStateToProps)(App);
