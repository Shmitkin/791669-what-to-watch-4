import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMainScreen() {
    const {mainMovie, movies, genres} = this.props;
    return (
      <MainScreen
        mainMovie = {mainMovie}
        movies = {movies}
        genres = {genres}
      />
    );
  }

  _renderMovieDetails() {
    const {movies} = this.props;
    return (
      <MovieInfo
        movie = {movies[0]}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/movie">
            {this._renderMovieDetails()}
          </Route>
        </Switch>
      </BrowserRouter>
    );

  }
}

App.propTypes = {
  mainMovie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

