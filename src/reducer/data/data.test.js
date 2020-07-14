import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import MovieModel from "../../models/movie.js";
import CommentModel from "../../models/comment.js";

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      promoMovie: {},
      comments: [],
    });
  });

  it(`Reducer should set movies when data received`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
    }, {
      type: ActionType.SET_MOVIES,
      payload: [{title: `first movie`}, {title: `second movie`}],
    })).toEqual({
      movies: [{title: `first movie`}, {title: `second movie`}],
      promoMovie: {},
      comments: [],
    });
  });

  it(`Reducer should set promo movie when data received`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
    }, {
      type: ActionType.SET_PROMO_MOVIE,
      payload: {title: `promoMovie`},
    })).toEqual({
      movies: [],
      promoMovie: {title: `promoMovie`},
      comments: [],
    });
  });

  it(`Reducer should set comments when data received`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
    }, {
      type: ActionType.SET_COMMENTS,
      payload: [{title: `first comment`}, {title: `second comment`}],
    })).toEqual({
      movies: [],
      promoMovie: {},
      comments: [{title: `first comment`}, {title: `second comment`}],
    });
  });
});


describe(`Operations work correctly`, () => {
  const api = createAPI(() => {});
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    const mockFilms = [{id: 34}, {id: 31}, {id: 88}];
    const expectedMoviesInStore = MovieModel.parseMovies(mockFilms);

    apiMock
      .onGet(`/films`)
      .reply(200, mockFilms);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIES,
          payload: expectedMoviesInStore,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadPromoMovie();

    const mockFilm = {id: 34, title: `promo movie`};
    const expectedPromoMovieInStore = MovieModel.parseMovie(mockFilm);

    apiMock
      .onGet(`/films/promo`)
      .reply(200, mockFilm);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_PROMO_MOVIE,
          payload: expectedPromoMovieInStore,
        });
      });
  });

  it(`Should make correct API all to /comments/:filmId`, function () {
    const mockFilmId = `23`;
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(mockFilmId);

    const mockComments = [{id: 3, user: {name: `UserName`, id: `32x`}}, {id: 423, user: {name: `UserName2`, id: `33d2x`}}];
    const expectedCommentsInStore = CommentModel.parseComments(mockComments);

    apiMock
    .onGet(`/comments/${mockFilmId}`)
    .reply(200, mockComments);

    return commentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_COMMENTS,
        payload: expectedCommentsInStore,
      });
    });

  });
});
