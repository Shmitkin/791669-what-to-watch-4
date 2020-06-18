import React from "react";
import PropTypes from "prop-types";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import HeaderMovieInfo from "../header-movie-info/header-movie-info.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";

const MainScreen = ({mainMovie, movies, genres}) => {

  return (
    <React.Fragment>
      <section className="movie-card">

        <MovieBackground
          altDesc = {mainMovie.title}
          image = {mainMovie.background}
        />

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

        <div className="movie-card__wrap">

          <HeaderMovieInfo
            title = {mainMovie.title}
            genre = {mainMovie.genre}
            release = {mainMovie.release}
            isMovieDetails = {false}
          />

        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres = {genres} />
          <MovieCardsList movies = {movies} />
          <ShowMoreButton />

        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  mainMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MainScreen;
