import { connect } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { LoadComments, LoadNewComment } from "../store/actions/PostActions"
import { useEffect, useState } from "react"

const mapStateToProps = ({ commentState}) => {
    return { commentState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => dispatch(LoadComments(id)),
        postComment: (id, comment) => dispatch(LoadNewComment(id, comment))
    }
} 
const Comments = (props) => {
 const [newComment, setNewComment] = useState ({
     name: '',
     comment: '',
     rating: '',
     recomendations: '',
 })
    let { id } = useParams()

    const onChange = (e) => {
        setNewComment({
          ...newComment,
          [e.target.name]: e.target.value
        })
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        props.postComment(id, newComment)
        setNewComment({
          name: '',
          rating: '',
          recomendations: '',
          comment: ''
        })
      }

useEffect(() => {
    
    props.fetchComments(id)
    console.log(props, 'this is props')
}, [])

    return (
        <div className='posts'>
            <h1>
                Make a Comment
            </h1>
            <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="name"
          value={newComment.name}
          onChange={(e) => onChange(e)}
        />
        <input
          name="rating"
          placeholder="rating"
          value={newComment.rating}
          onChange={(e) => onChange(e)}
        />
        <input
          name="comment"
          placeholder="comment"
          value={newComment.comment}
          onChange={(e) => onChange(e)}
        />
        <input
          name="recomendations"
          placeholder="recomendations"
          value={newComment.recomendations}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Comment</button>
      </form>
            { props.commentState.comments.map((comment) => (
                <ul key={comment._id}>
                    <h1>{comment.name}</h1>
                    <p>{comment.comment}</p>
                    <p>{comment.recomendations}</p>
                    <h6>{comment.rating} out of 10</h6>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)