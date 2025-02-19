import React from "react";
import { Link } from "react-router-dom";

const logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/login';
};

const Navbar = () => {

	return (
		<nav>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
            <Link to="/private">Private</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
	);
};

export default Navbar;