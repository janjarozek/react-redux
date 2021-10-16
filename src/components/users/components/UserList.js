import React from 'react'

import UserItem from './UserItem';

export default function UserList({users}) {
    return (
        <ul>
            {users.map(user => <UserItem key={`user-id-${user.id}`} data={{user}} />)}
        </ul>
    )
}
