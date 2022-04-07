import { GetPosts, GetComments, PostComments } from "../../services/PostServices";
import { GET_POSTS, GET_COMMENTS, POST_COMMENTS } from "../types";

export const LoadPost = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()
            dispatch({
                type: GET_POSTS,
                payload: posts
            })
            console.log(posts, 'post getting dispatch')
        } catch (error) {
            throw error
        }
    }
}

export const LoadComments = (id) => {
    console.log(id, 'this is the id')
    return async (dispatch) => {
        try {
            console.log(id, 'id comments')
            const comments = await GetComments(id)
            dispatch({
                type: GET_COMMENTS,
                payload: comments
            })
            console.log(comments, 'comments getting dispatch')
        } catch (error) {
            throw error
        }
    }
}

export const LoadNewComment = (id, newComment) => {
    return async (dispatch) => {
        try {
            const comment = await PostComments(id, newComment)
            dispatch({
                type: POST_COMMENTS,
                payload: comment
            })
        } catch (error) {
            throw error
        }
    }
}