import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { LoadPost } from "../store/actions/PostActions"
import { useEffect } from "react"

const mapStateToProps = ({ postState}) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPost())
    }
} 
const Posts = (props) => {

useEffect(() => {
    props.fetchPosts()
}, [])

    return (
        <div className='posts'>
            <h1>
                Make a Post
            </h1>
            { props.postState.posts.map((post) => (
                <ul key={post._id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <div>
                        <Link to={`/posts/${post._id}`}>make a comment</Link>
                    </div>
                    <img className='pictures' src={post.image} alt='image'></img>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)