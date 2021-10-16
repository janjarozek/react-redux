import React from 'react'

export default function PostItem({post}) {
    return (
        <li>
            <b>{post.id}</b> {post.title}
        </li>
    )
}
