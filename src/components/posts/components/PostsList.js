import React from 'react'

import PostItem from './PostItem'

export default function PostsList({posts}) {
    return (
        <ul>
            {posts.map(post => <PostItem key={`post-id:${post.id}`} post={post}/>)}
        </ul>
    )
}
