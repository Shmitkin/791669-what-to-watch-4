import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
// import {connect} from "react-redux";
import SignInPage from "../sign-in-page/sign-in-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/films/:id" component={MovieInfo} />
          <Route exact path="/login" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;
