import React from "react";

import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import UserBlock from "../user-block/user-block.jsx";


export default function MyListPage() {
  return (
    <div className="user-page">

      <PageHeader extraClass={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </PageHeader>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieCardsList movies = {[]} />

      </section>
      <PageFooter />
    </div>

  );
}
