import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <Outlet></Outlet>


                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-red-200 text-neutral font-bold ">
                        {/* <!-- Sidebar content here --> */}
                        <h2 className='text-2xl text-error font-bold text-start'>Dashboard</h2>
                        <div className="divider"></div>
                        {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
                        {!admin && <li><Link to="/dashboard/reviews">My Reviews</Link></li>}
                        {admin && <li><Link to="/dashboard/addproducts">Add Products</Link></li>}
                        {admin && <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>}
                        {admin && <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>}
                        {admin && <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>}
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;