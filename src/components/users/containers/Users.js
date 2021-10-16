import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../redux'

import UserList from '../components/UserList';

function Users( props ) {
    const { users, isLoading, isError, getUsers } = props;
    // const [users, setUsers] = useState(null);

    const handleFetchButton = () => {
        // getApiData();
        getUsers();
    }

    // const getApiData = async() => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    //     if ( response.ok ) {
    //         const data = await response.json();
    //         setUsers(data.slice(0,10));
    //     }
    // }
    return (
        <div className="divContainer">
            <h3>Users</h3>
            <button onClick={handleFetchButton}>Fetch Users</button>
            {isLoading && <p>Users list is loading, please wait!</p>}
            {isError && <p>An error occured!</p>}
            {users && (
                <UserList users={users}/>
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        users: state.storeUsers.storeUsers,
        isLoading: state.storeUsers.isLoading,
        isError: state.storeUsers.isError
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);