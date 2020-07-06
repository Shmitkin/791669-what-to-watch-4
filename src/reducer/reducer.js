const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  movies: [],
  mainMovie: {},
  activeMovie: null,
  isUserAuth: false,
};

const ActionType = {
  SET_MOVIES: `SET_MOVIES`,
  SET_MAIN_MOVIE: `SET_MAIN_MOVIE`,
  SET_ACTIVE_MOVIE: `SET_ACTIVE_MOVIE`,
  SET_USER_AUTH: `SET_USER_AUTH`,
};

export const ActionCreator = {

  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies,
  }),

  setMainMovie: (movie) => ({
    type: ActionType.SET_MAIN_MOVIE,
    payload: movie,
  }),

  setActiveMovie: (movie) => ({
    type: ActionType.SET_ACTIVE_MOVIE,
    payload: movie,
  }),

  setUserAuth: () => ({
    type: ActionType.SET_USER_AUTH,
    payload: true,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.SET_MAIN_MOVIE:
      return extend(state, {
        mainMovie: action.payload,
      });
    case ActionType.SET_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload,
      });
    case ActionType.SET_USER_AUTH:
      return extend(state, {
        isUserAuth: action.payload
      });
  }
  return state;
};


export {reducer, ActionType};
