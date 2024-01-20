
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [userList, setUserlist] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        setError('');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUserlist(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <ul>
            {isLoading && 'loading...'}
            {error && error}
            {userList.length &&
                userList.map((user) => {
                    const onUserClick = () => navigate(`/users${user.id}`)
                    return (

                        <li key={`user-${user.id}`}>
                            {user.name} {user.email}
                            <button onClick={onUserClick}>More...</button>
                        </li>
                    )

                })}
        </ul>)
}

export default UserList