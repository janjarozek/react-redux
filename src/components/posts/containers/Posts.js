import React, {useState} from 'react'
import PostsList from '../components/PostsList';

export default function Posts() {
    const [posts, setPosts] = useState(null);

    const handleFetchButton = () => {
        getApiData();
    }

    const getApiData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        if ( response.ok ) {
            const data = await response.json();
            setPosts(data.slice(0,5));
        }
    }
    return (
        <div className="divContainer">
            <h3>Posts</h3>
            <button onClick={handleFetchButton}>Fetch Posts</button>
            {posts && (
                <PostsList posts={posts} />
            )}
        </div>
    )
}
