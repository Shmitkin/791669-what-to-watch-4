import React, {PureComponent} from "react";
import {Switch, Route, Router, withRouter} from "react-router-dom";
import history from "../../history.js";

import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import AddReviewPage from "../add-review-page/add-review-page.jsx";

import {MovieInfoTabs, DEFAULT_GENRE, AppRoute} from "../../consts.js";
import withActiveTab from "../../hocs/with-active-tab.jsx";
import withPrivateRoute from "../../hocs/with-private-route.jsx";

const DEFAULT_MOVIE_INFO_TAB = MovieInfoTabs.OVERVIEW;

const MovieInfoWrapped = withActiveTab(MovieInfo, DEFAULT_MOVIE_INFO_TAB);
const MainScreenWrapped = withActiveTab(MainScreen, DEFAULT_GENRE);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={MainScreenWrapped} />
          <Route exact path={`${AppRoute.FILMS}/:id`} component={withRouter(MovieInfoWrapped)} />
          <Route exact path={AppRoute.LOGIN} component={SignInPage} />
          <Route exact path={AppRoute.MY_LIST} component={withPrivateRoute(MyListPage)} />
          <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`} component={withPrivateRoute(AddReviewPage)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
