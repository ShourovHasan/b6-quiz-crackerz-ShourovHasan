import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header_container'>
            <div>
                <h2 >AIUB Quiz Crackers</h2>                
            </div>
            <div className='header_menu'>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;