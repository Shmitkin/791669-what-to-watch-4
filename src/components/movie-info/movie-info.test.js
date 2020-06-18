import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";

const movie = {
  title: `Snatch`,
  preview: `img/snatch.jpg`,
  poster: `img/snatch.jpg`,
  background: `img/snatch.jpg`,
  genre: `Thriller`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
  rating: 9,
  votes: 344,
  director: `Best Director`,
  starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
  duration: 156,
  release: 2016,
};

it(`Should MovieInfo render correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfo
          movie = {movie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
