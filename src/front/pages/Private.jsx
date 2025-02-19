import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Private = () => {
    const history = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

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
