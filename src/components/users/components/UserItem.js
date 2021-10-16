import React from 'react'

export default function UserItem({data}) {
    return (
        <li>
            <b>User {data.user.id}:</b> {data.user.name}
        </li>
    )
}
