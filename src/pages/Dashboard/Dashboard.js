import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            
            <div class="drawer drawer-mobile">
                <input id="dash-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                
                <Outlet></Outlet>


                    {/* <!-- Page content here --> */}
                   

                </div>
                <div class="drawer-side">
                    <label for="dash-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-red-200 text-base-content font-bold ">
                        {/* <!-- Sidebar content here --> */}
                        <h2 className='text-2xl text-error font-bold text-start'>Dashboard</h2>
                        <div className="divider"></div>
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/reviews">My Reviews</Link></li>
                        <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                        <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;