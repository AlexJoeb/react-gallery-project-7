import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ( props ) => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/cats" onClick={() => { props.performSearch("cats") }} > Cats </NavLink></li>
            <li><NavLink to="/dogs" onClick={() => {props.performSearch("dogs") }} > Dogs </NavLink></li>
            <li><NavLink to="/rabbit" onClick={() => { props.performSearch("rabbit") }} > Rabbits </NavLink></li>
        </ul>
    </nav>
)

export default Navigation;