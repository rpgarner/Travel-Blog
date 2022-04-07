const { GET_COMMENTS, POST_COMMENTS} = require("../types");

const iState = {
  comments: [],
  newComment: {
      name: '',
      comment: '',
      rating: '',
      recomendations: '',

  }
};

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
        state.comments = new Array(...action.payload)
      return { ...state};
    case POST_COMMENTS:
        state.comments.push(action.payload)
        return {...state }
    default:
      return { ...state };
  }
};

export default CommentReducer;
