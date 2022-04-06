const { model } = require("mongoose");
const PostSchema = require("./post");
const CommentSchema = require("./comment");


const Post = model("post", PostSchema);
const Comment = model("comment", CommentSchema);


module.exports = {
 Post,
 Comment,
};