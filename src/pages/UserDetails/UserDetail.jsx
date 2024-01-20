import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const params = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setUser(null);
        setError('');
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [params.id]); 

    return (
        <ul>
            {isLoading && 'Загрузка...'}
            {error && error}
            {user && (
                <li key={`user-${user.id}`}>
                    {user.name} {user.email}
                    {user.street}{user.city}

                </li>
            )}
        </ul>
    );
};

export default UserDetail;
