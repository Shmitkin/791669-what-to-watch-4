import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films, mainFilm} from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, ActionCreator} from "./reducer.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(ActionCreator.setMovies(films));
store.dispatch(ActionCreator.setMainMovie(mainFilm));

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
