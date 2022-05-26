import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useNavigationType } from 'react-router-dom';
import logo from '../../assets/img/logocar.png'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="navbar bg-error text-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-3 shadow-xl bg-error rounded-box w-48 flex flex-col items-center">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li>{user ?
                            <Link className='px-2 mx-auto text-decoration-none text-white ' to="/dashboard">Dashboard</Link>

                            : <Link to='/login' > Login</Link>}</li>
                        <li>{user && <div className='text-error font-bold px-2 border-0 rounded-2xl bg-white  mx-1' onClick={logout}>Logout</div>}</li>
                    </ul>
                </div>
                <div className="btn btn-ghost normal-case text-xl "><img className='w-28 lg:w-40' src={logo} alt="" /></div>


            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li>{user ?
                        <label htmlFor="dash-drawer" onClick={() => { navigate('/dashboard') }} class="btn btn-ghost drawer-button">Dashboard</label>
                        : <Link to='/login' > Login</Link>}</li>
                    <li>{user && <div className='text-error font-bold px-2 border-0 rounded-2xl bg-white  mx-1' onClick={logout}>Logout</div>}</li>


                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dash-drawer" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Header;