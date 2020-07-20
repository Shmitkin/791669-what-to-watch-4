import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app.jsx";
import {AuthorizationStatus} from "./consts.js";

import {createAPI} from "./api.js";
import reducer from "./reducer/reducer.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
import withLoader from "./hocs/with-loader.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const WrappedApp = withLoader(App);

store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <WrappedApp />
    </Provider>,
    document.querySelector(`#root`)
);
