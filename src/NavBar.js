import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/counter">Counter Button</Link>
        </li>
        <li>
            <Link to="/people-list">People list</Link>
        </li>
        <li>
            <Link to="/forms">Forms</Link>
        </li>
        <li>
            <Link to="/user">User Profile</Link>
        </li>
    </ul>
)