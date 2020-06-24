import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import {MovieInfoTitles} from "../../consts.js";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };
  }

  _getSimilarMovies() {
    const {genre, title} = this.state.movie;

    const {movies} = this.props;
    return movies.reduce((similarMovies, movie) => {
      if (movie.title === title) {
        return similarMovies;
      }
      if (movie.genre === genre) {
        similarMovies.push(movie);
      }
      return similarMovies;
    }, []);
  }

  _renderMainScreen() {
    const {mainMovie, movies, genres} = this.props;

    if (this.state.movie === null) {
      return (
        <MainScreen
          mainMovie = {mainMovie}
          movies = {movies}
          genres = {genres}
          onMovieCardClick = {(movie) => {
            this.setState({movie});
          }}
        />
      );
    } else if (this.state.movie !== null) {
      return (
        <MovieInfo
          movie = {this.state.movie}
          activeTab = {MovieInfoTitles.OVERVIEW}
          onMovieCardClick = {(movie) => {
            this.setState({movie});
          }}
          similarMovies = {this._getSimilarMovies()}
        />
      );
    } else {
      return null;
    }
  }

  _renderMovieDetails() {
    const {movies} = this.props;
    return (
      <MovieInfo
        movie = {movies[0]}
        similarMovies = {movies.slice(0, 4)}
        onMovieCardClick = {() => {}}
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

