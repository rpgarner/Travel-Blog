const { Comment, Post } = require('../models/index')

const getPosts = async (req, res) => {
    let workouts = await Workout.find({});
    res.json(workouts);
  };
          //////// get reviews //////
  const getComments = async (req, res) => {
    let getreviews = await Review.find({});
    res.json(getreviews);
  };

  module.export = {
      getPosts,
      getComments,
  }