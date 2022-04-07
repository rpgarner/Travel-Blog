const { Comment, Post } = require('../models/index')

const getPosts = async (req, res) => {
    let posts = await Post.find({});
    res.json(posts);
  };
          //////// get reviews //////
  const getComments = async (req, res) => {
    let comments = await Comment.find({});
    res.json(comments);
  };
  const postAComment = async (req, res) => {
    try {
      const newComment = await new Comment(req.body)
      await newComment.save()
  
      const post = await Post.findById(req.params.id)
      post.comments.push(newComment._id)
      await post.save()
  
      return res.status(201).json(newComment)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }

  }

 const getPostById = async (req, res) => {
   let { id } = req.params;
   let findPost = await Post.findById(id).populate('comments')
   res.json(findPost)
 }

  module.exports = {
      getPosts,
      getComments,
      getPostById,
      postAComment,
  }