import React from 'react';
import {Link} from "react-router-dom";

export const GlobalNav = () => {
    return (
        <div>
            <nav>
                <Link to="users">Users</Link> | {" "}
                <Link to="dashboard">Dashboard</Link>
            </nav>
        </div>
    );
};
