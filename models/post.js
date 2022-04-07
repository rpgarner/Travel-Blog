const { Schema } = require("mongoose");

const Post = new Schema(
  {
      _id: {type: Schema.Types.ObjectId, default: null},
      title: {type: String, required: true},
      description: {type: String, required: true},
      image: {type: String, required: true},
      comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}]
  },
  { timestamps: true }
);

module.exports = Post;