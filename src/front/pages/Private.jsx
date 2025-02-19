import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Private = () => {
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            history.push('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [history]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome to the private page!</h1>
            <p>This content is only accessible to authenticated users.</p>
        </div>
    );
};

export default Private;
