import {AuthorizationStatus} from "./consts.js";
import NameSpace from "./reducer/name-space.js";
import {DataLoadStatus} from "./consts.js";

export const movie = {
  isFavorite: false,
  id: `23`,
  title: `Pulp Fiction`,
  videoFull: `scr/videFull`,
  videoPrev: `img/seven-years-in-tibet.mp4`,
  preview: `img/pulp-fiction.jpg`,
  poster: `img/pulp-fiction.jpg`,
  background: `img/pulp-fiction.jpg`,
  genre: `Drama`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
  rating: 2.3,
  votes: 293,
  director: `Best Director`,
  starring: [`Nicola Cage`, `Cara Delvin`, `Joseph Moser`],
  duration: 87,
  release: 2020,
  reviews: [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
      author: `Olegsey`,
      rating: 8.4,
      date: new Date(234242323),
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
      author: `Mihail`,
      rating: 3.4,
      date: new Date(3234323432),
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
      author: `Yuliiiiiya`,
      rating: 5.2,
      date: new Date(234321234),
    },
  ]
};

export const movies = [
  {
    isFavorite: false,
    id: `2323`,
    title: `Seven Years IN Tibet`,
    videoPrev: `img/seven-years-in-tibet.mp4`,
    preview: `img/seven-years-in-tibet.jpg`,
    poster: `img/seven-years-in-tibet.jpg`,
    background: `img/seven-years-in-tibet.jpg`,
    genre: `Family`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 5.0,
    votes: 1255,
    director: `Best Director`,
    starring: [`Nicola Cage`, `Cara Delvin`, `Joseph Moser`],
    duration: 24,
    release: 2005,
    reviews: [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Olegsey`,
        rating: 8.4,
        date: new Date(234242323),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Mihail`,
        rating: 3.4,
        date: new Date(3234323432),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Yuliiiiiya`,
        rating: 5.2,
        date: new Date(234321234),
      },
    ]
  },
  {
    isFavorite: false,
    id: `2341`,
    title: `Moonrise Kingdom`,
    videoPrev: `img/seven-years-in-tibet.mp4`,
    preview: `img/moonrise-kingdom.jpg`,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/moonrise-kingdom.jpg`,
    genre: `Horror`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 4.8,
    votes: 213,
    director: `Best Director`,
    starring: [`Nicola Cage`, `Cara Delvin`, `Joseph Moser`],
    duration: 79,
    release: 2012,
    reviews: [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Olegsey`,
        rating: 8.4,
        date: new Date(234242323),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Mihail`,
        rating: 3.4,
        date: new Date(3234323432),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Yuliiiiiya`,
        rating: 5.2,
        date: new Date(234321234),
      },
    ]
  },
  {
    isFavorite: false,
    id: `2233`,
    title: `Snatch`,
    videoPrev: `img/seven-years-in-tibet.mp4`,
    preview: `img/snatch.jpg`,
    poster: `img/snatch.jpg`,
    background: `img/snatch.jpg`,
    genre: `Comedy`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 3.0,
    votes: 22,
    director: `Best Director`,
    starring: [`Nicola Cage`, `Cara Delvin`, `Joseph Moser`],
    duration: 210,
    release: 1998,
    reviews: [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Olegsey`,
        rating: 8.4,
        date: new Date(234242323),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Mihail`,
        rating: 3.4,
        date: new Date(3234323432),
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
        author: `Yuliiiiiya`,
        rating: 5.2,
        date: new Date(234321234),
      },
    ]
  },
];

export const genres = [
  `First`,
  `Second`,
  `Third`,
  `Fourth`,
  `Fifth`
];

export const comments = [
  {
    id: 1,
    text: `comment text`,
    author: `author1`,
    authorId: 16,
    rating: 7,
    date: `2020-06-16T10:54:44.818Z`,
  },
  {
    id: 3,
    text: `comment text2`,
    author: `author2`,
    authorId: 126,
    rating: 9,
    date: `2020-06-16T11:54:44.818Z`,
  },
];

export const mockStore = {
  [NameSpace.DATA]: {
    movies,
    promoMovie: movie,
    favoriteMovies: [movies[0], movies[1]],
    comments,
    [DataLoadStatus.MOVIES]: true,
    [DataLoadStatus.PROMO_MOVIE]: true

  },
  [NameSpace.MAIN]: {
    showingMoviesCount: 8,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }

};
