import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
import {AuthorizationStatus} from "./consts.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.checkAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadPromoMovie());
store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
