import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(props) {
    return (
        <div className=" row navigation " id="navigation">
            <NavLink to="/about"> </NavLink>
            <NavLink to="/contact"> </NavLink>
            <NavLink to="/portfolio"> </NavLink>
            <NavLink to="/resume"> </NavLink>
        </div>
    );
}

export default Navigation;