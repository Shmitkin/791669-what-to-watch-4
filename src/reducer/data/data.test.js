import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import MovieModel from "../../models/movie.js";
import CommentModel from "../../models/comment.js";
import {DataLoadStatus} from "../../consts.js";

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should set movies when data received`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_MOVIES,
      payload: [{title: `first movie`}, {title: `second movie`}],
    })).toEqual({
      movies: [{title: `first movie`}, {title: `second movie`}],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should set promo movie when data received`, () => {
    expect(reducer({
      favoriteMovies: [],
      movies: [],
      promoMovie: {},
      comments: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_PROMO_MOVIE,
      payload: {title: `promoMovie`},
    })).toEqual({
      favoriteMovies: [],
      movies: [],
      promoMovie: {title: `promoMovie`},
      comments: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should set comments when data received`, () => {
    expect(reducer({
      favoriteMovies: [],
      movies: [],
      promoMovie: {},
      comments: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_COMMENTS,
      payload: [{title: `first comment`}, {title: `second comment`}],
    })).toEqual({
      favoriteMovies: [],
      movies: [],
      promoMovie: {},
      comments: [{title: `first comment`}, {title: `second comment`}],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should set user favorite movies`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_USER_FAVORITE_MOVIES,
      payload: [{id: 131}, {id: `movieId`}]
    })).toEqual({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [{id: 131}, {id: `movieId`}],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should change movie status in movies array`, () => {
    expect(reducer({
      movies: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.CHANGE_MOVIE_FAVORITE_STATUS,
      payload: {id: 2, isFavorite: true}
    })).toEqual({
      movies: [{id: 1, isFavorite: false}, {id: 2, isFavorite: true}],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should change load status of isMoviesLoaded when DataType.MOVIES`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_DATA_LOAD_STATUS,
      payload: {dataType: DataLoadStatus.MOVIES, status: true}
    })).toEqual({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: true,
      isPromoMovieLoaded: false,
    });
  });

  it(`Reducer should change load status of isPromoMovieLoaded when DataType.PROMO_MOVIE`, () => {
    expect(reducer({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: false,
    }, {
      type: ActionType.SET_DATA_LOAD_STATUS,
      payload: {dataType: DataLoadStatus.PROMO_MOVIE, status: true}
    })).toEqual({
      movies: [],
      promoMovie: {},
      comments: [],
      favoriteMovies: [],
      isMoviesLoaded: false,
      isPromoMovieLoaded: true,
    });
  });


});


describe(`Operations work correctly`, () => {
  const api = createAPI(() => {});
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies(()=>{});

    const mockFilms = [{id: 34}, {id: 31}, {id: 88}];
    const expectedMoviesInStore = MovieModel.parseMovies(mockFilms);

    apiMock
      .onGet(`/films`)
      .reply(200, mockFilms);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIES,
          payload: expectedMoviesInStore,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_DATA_LOAD_STATUS,
          payload: {dataType: DataLoadStatus.MOVIES, status: true},
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadPromoMovie(()=>{});

    const mockFilm = {id: 34, title: `promo movie`};
    const expectedPromoMovieInStore = MovieModel.parseMovie(mockFilm);

    apiMock
      .onGet(`/films/promo`)
      .reply(200, mockFilm);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_PROMO_MOVIE,
          payload: expectedPromoMovieInStore,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_DATA_LOAD_STATUS,
          payload: {dataType: DataLoadStatus.PROMO_MOVIE, status: true},
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

  it(`Should make a correct API call to /favorites`, () => {
    const favoriteMovieLoader = Operation.loadFavoriteMovies();
    const dispatch = jest.fn();
    const mockMovies = [{id: 123}, {id: 43}];
    const expectedMoviesInStore = MovieModel.parseMovies(mockMovies);

    apiMock
    .onGet(`/favorite`)
    .reply(200, mockMovies);

    return favoriteMovieLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER_FAVORITE_MOVIES,
        payload: expectedMoviesInStore,
      });
    });
  });

  it(`Should make a correct POST API call to /favorites/:movieId/:favoriteStatus`, () => {
    const mockMovie = {id: 22, isFavorite: false};
    const favoriteMovieStatusChanger = Operation.changeMovieFavoriteStatus(mockMovie);
    const dispatch = jest.fn();

    apiMock
    .onPost(`/favorite/${mockMovie.id}/1`)
    .reply(200, {id: 22, isFavorite: true});

    return favoriteMovieStatusChanger(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_MOVIE_FAVORITE_STATUS,
        payload: MovieModel.parseMovie({id: 22, isFavorite: true}),
      });
    });
  });

  it(`Should make a correct POST API call to /comments:movieId`, () => {
    const mockMovieId = 23;
    const mockComment = {rating: 5, text: `comment over 50 symbols`};
    const commentSender = Operation.sendNewComment(mockMovieId, mockComment, ()=>{}, ()=>{});
    const dispatch = jest.fn();
    const mockResponseData = [{id: 3, user: {name: `UserName`, id: `32x`}, comment: `comment over 50 symbols`, rating: 5}];

    apiMock
    .onPost(`/comments/${mockMovieId}`, CommentModel.parseNewComment(mockComment))
    .reply(200, mockResponseData);

    return commentSender(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_COMMENTS,
        payload: CommentModel.parseComments(mockResponseData)
      });
    });
  });
});
