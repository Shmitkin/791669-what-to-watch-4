export default class MovieModel {
  constructor(movie) {
    this.id = movie[`id`].toString();
    this.title = movie[`name`];
    this.videoPrev = movie[`preview_video_link`];
    this.videoFull = movie[`video_link`];
    this.preview = movie[`preview_image`];
    this.poster = movie[`poster_image`];
    this.background = movie[`background_image`];
    this.genre = movie[`genre`];
    this.description = movie[`description`];
    this.rating = movie[`rating`];
    this.votes = movie[`scores_count`];
    this.director = movie[`director`];
    this.starring = movie[`starring`];
    this.duration = movie[`run_time`];
    this.release = movie[`released`];
    this.isFavotite = movie[`is_favorite`];
    this.backgroundColor = movie[`background_color`];
  }

  toRAW() {
    return {
      "id": parseInt(this.id, 10),
      "name": this.title,
      "preview_video_link": this.videoPrev,
      "video_link": this.videoFull,
      "preview_image": this.preview,
      "poster_image": this.poster,
      "background_image": this.background,
      "genre": this.genre,
      "description": this.description,
      "rating": this.rating,
      "scores_count": this.votes,
      "director": this.director,
      "starring": this.starring,
      "run_time": this.duration,
      "released": this.release,
      "is_favorite": this.isFavotite,
      "background_color": this.backgroundColor,
    };
  }

  static parseMovie(movie) {
    return new MovieModel(movie);
  }

  static parseMovies(movies) {
    return movies.map(MovieModel.parseMovie);
  }
}
