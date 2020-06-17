import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Footer from "../footer/footer.jsx";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";

const MainScreen = ({mainMovieTitle, mainMovieGenre, mainMovieReleaseDate, movies, genres}) => {

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={mainMovieTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${mainMovieTitle} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{mainMovieTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{mainMovieGenre}</span>
                <span className="movie-card__year">{mainMovieReleaseDate}</span>
              </p>
              <MovieCardButtons />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {genres}
          />
          <MoviesList
            movies = {movies}
          />
          <ShowMoreButton />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  mainMovieTitle: PropTypes.string.isRequired,
  mainMovieGenre: PropTypes.string.isRequired,
  mainMovieReleaseDate: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MainScreen;
