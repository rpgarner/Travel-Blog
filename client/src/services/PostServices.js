import Client from "./"

export const GetPosts = async () => {
    try {
        const res = await Client.get('/posts')
        console.log(res, 'getting post results')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetComments = async (postId) => {
    try {
        const res = await Client.get(`/posts/${postId}`)
        console.log(res, 'get commits')
        return res.data.comments
    } catch (error) {
        throw error
    }
}

export const PostComments = async (id, comment) => {
    try {
        const res = await Client.post(`/posts/${id}`, comment)
        console.log(res, 'making comment')
        return res.data
    } catch (error) {
        throw error
    }
}