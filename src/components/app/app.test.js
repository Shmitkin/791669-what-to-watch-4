import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testState = {
  mainMovie:
  {title: `Stranger Things`,
    genre: `Thriller`,
    release: 2017
  },
  genres: [
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
  ],
  movies: [
    {
      title: `Pulp Fiction`,
      preview: `img/pulp-fiction.jpg`,
      poster: `img/pulp-fiction.jpg`,
      background: `img/pulp-fiction.jpg`,
      genre: `Thriller`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
      rating: 9,
      votes: 344,
      director: `Best Director`,
      starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
      duration: 156,
      release: 2016,
    },
    {
      title: `Pulp Fiction`,
      preview: `img/pulp-fiction.jpg`,
      poster: `img/pulp-fiction.jpg`,
      background: `img/pulp-fiction.jpg`,
      genre: `Thriller`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
      rating: 9,
      votes: 344,
      director: `Best Director`,
      starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
      duration: 156,
      release: 2016,
    },
    {
      title: `Pulp Fiction`,
      preview: `img/pulp-fiction.jpg`,
      poster: `img/pulp-fiction.jpg`,
      background: `img/pulp-fiction.jpg`,
      genre: `Thriller`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
      rating: 9,
      votes: 344,
      director: `Best Director`,
      starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
      duration: 156,
      release: 2016,
    },
    {
      title: `Pulp Fiction`,
      preview: `img/pulp-fiction.jpg`,
      poster: `img/pulp-fiction.jpg`,
      background: `img/pulp-fiction.jpg`,
      genre: `Thriller`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
      rating: 9,
      votes: 344,
      director: `Best Director`,
      starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
      duration: 156,
      release: 2016,
    }
  ]
};

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          mainMovie = {testState.mainMovie}
          movies = {testState.movies}
          genres = {testState.genres}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
