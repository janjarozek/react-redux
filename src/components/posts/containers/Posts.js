// import React, {useState} from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux'

import PostsList from '../components/PostsList'

function Posts(props) {
    const {posts, isLoading, isError, fetchPosts} = props;
    // const [posts, setPosts] = useState(null);

    const handleFetchButton = () => {
        // getApiData();
        fetchPosts();
    }

    // const getApiData = async() => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    //     if ( response.ok ) {
    //         const data = await response.json();
    //         setPosts(data.slice(0,5));
    //     }
    // }
    return (
        <div className="divContainer">
            <h3>Posts</h3>
            <button onClick={handleFetchButton}>Fetch Posts</button>
            {isLoading && <p>Loading posts, please wait...</p>}
            {isError && <p>Loading failed!</p>}
            {posts && (
                <PostsList posts={posts} />
            )}
        </div>
    )
}

function mapStateToProps(state){
    return{
        posts: state.storePosts.posts,
        isLoading: state.storePosts.isLoading,
        isError: state.storePosts.isError
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);