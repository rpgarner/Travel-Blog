const { Schema } = require("mongoose");

const Comment = new Schema(
  {
    _id: {type: Schema.Types.ObjectId, default: null},
    name: {type: String, required: true},
    comment: {type: String, required: true},
    rating: {type: String, required: true},
    recomendations: {type: String, required: true},
    
  },
  { timestamps: true }
);

module.exports = Comment;