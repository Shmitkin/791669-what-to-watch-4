import React from "react";
import PropTypes from "prop-types";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import HeaderMovieInfo from "../header-movie-info/header-movie-info.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";

const MainScreen = ({mainMovie, movies, genres, onMovieCardClick}) => {

  return (
    <React.Fragment>
      <section className="movie-card">

        <MovieBackground
          movie = {mainMovie}
        />

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

        <div className="movie-card__wrap">

          <HeaderMovieInfo
            movie = {mainMovie}
            isMovieDetails = {false}
          />

        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres = {genres} />
          <MovieCardsList
            movies = {movies}
            onMovieCardClick = {onMovieCardClick}
          />
          <ShowMoreButton />

        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  mainMovie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MainScreen;
