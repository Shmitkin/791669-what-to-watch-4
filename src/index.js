import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films, mainFilm} from "./mocks/films.js";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer, ActionCreator, Operation} from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const onUnauthorized = () => {
  console.log(`no authorization`);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(Operation.loadPromoMovie());
store.dispatch(Operation.loadMovies());

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
