import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {GlobalNav} from '.';

export const Layout = () => {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <GlobalNav/>
            <main>
                <Outlet/>
            </main>
            <nav>
                <Link to="/about">About</Link>&nbsp;|&nbsp;
                <Link to="/privacy">Privacy</Link>&nbsp;|&nbsp;
                <Link to="/tos">Term of service</Link>&nbsp;|&nbsp;
                <Link to="/contact-us">Contact us</Link>
            </nav>
        </div>
    );
};
