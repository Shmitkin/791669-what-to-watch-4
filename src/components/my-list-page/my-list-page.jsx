import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import UserBlock from "../user-block/user-block.jsx";

import {getUserFavoriteMovies} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";


class MyListPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadUserFavoriteMovies} = this.props;
    loadUserFavoriteMovies();
  }

  componentDidUpdate(prevProps) {
    const {loadUserFavoriteMovies, userFavoriteMovies} = this.props;
    if (prevProps.userFavoriteMovies !== userFavoriteMovies) {
      loadUserFavoriteMovies();
    }
  }

  render() {
    const {userFavoriteMovies} = this.props;

    return (
      <div className="user-page">
        <PageHeader extraClass={`user-page__head`}>
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock />
        </PageHeader>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieCardsList movies = {userFavoriteMovies} />
        </section>
        <PageFooter />
      </div>
    );
  }
}

MyListPage.propTypes = {
  userFavoriteMovies: PropTypes.array.isRequired,
  loadUserFavoriteMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userFavoriteMovies: getUserFavoriteMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadUserFavoriteMovies: () => {
    dispatch(UserOperation.loadFavoriteMovies());
  }
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
