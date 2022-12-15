import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(props) {


    return (
        <div className=" row navigation " id="navigation">
            <NavLink to="/about"> about </NavLink>
            <NavLink to="/contact"> contact </NavLink>
            <NavLink to="/portfolio"> portolio</NavLink>
            <NavLink to="/resume"> resume </NavLink>
        </div>
    )
};

export default Navigation;