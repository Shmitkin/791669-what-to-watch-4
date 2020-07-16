import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter, withRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import AddReviewPage from "../add-review-page/add-review-page.jsx";

import {MovieInfoTabs, DEFAULT_GENRE, AppRoute} from "../../consts.js";
import withActiveTab from "../../hocs/with-active-tab.jsx";

const DEFAULT_MOVIE_INFO_TAB = MovieInfoTabs.OVERVIEW;

const MovieInfoWrapped = withActiveTab(MovieInfo, DEFAULT_MOVIE_INFO_TAB);
const MainScreenWrapped = withActiveTab(MainScreen, DEFAULT_GENRE);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={MainScreenWrapped} />
          <Route exact path={`${AppRoute.FILMS}/:id`} component={withRouter(MovieInfoWrapped)} />
          <Route exact path={AppRoute.LOGIN} component={SignInPage} />
          <Route exact path={AppRoute.MY_LIST} component={MyListPage} />
          <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`} component={withRouter(AddReviewPage)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
