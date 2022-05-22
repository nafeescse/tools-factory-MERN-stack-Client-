import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logocar.png'

const Header = () => {
    return (
        <div className="navbar bg-secondary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/purchase'>Purchase</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl "><img className='w-28 lg:w-40' src={logo} alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/purchase'>Purchase</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;