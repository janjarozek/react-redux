import React, {useState} from 'react'

import UserList from '../components/UserList';

export default function UsersContainer() {
    const [users, setUsers] = useState(null);

    const handleFetchButton = () => {
        getApiData();
    }

    const getApiData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        if ( response.ok ) {
            const data = await response.json();
            setUsers(data.slice(0,10));
        }
    }
    return (
        <div className="divContainer">
            <h3>Users</h3>
            <button onClick={handleFetchButton}>Fetch Users</button>
            {users && (
                <UserList users={users}/>
            )}
        </div>
    )
}
