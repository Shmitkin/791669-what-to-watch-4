export default class CommentModel {
  constructor(comment) {
    this.id = comment[`id`];
    this.text = comment[`comment`];
    this.author = comment[`user`][`name`];
    this.authorId = comment[`user`][`id`];
    this.rating = comment[`rating`];
    this.date = comment[`date`];
  }

  static parseNewComment(comment) {
    return {
      "rating": comment.rating,
      "comment": comment.text,
    };
  }

  static parseComment(comment) {
    return new CommentModel(comment);
  }

  static parseComments(comments) {
    return comments.map(CommentModel.parseComment);
  }
}
