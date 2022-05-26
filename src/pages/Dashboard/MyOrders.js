import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order/?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
        else {
            <Loading></Loading>
        }
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = orders.filter(order => order._id !== id);
            setOrders(rest);

        }
    }


    return (
        <div>
            <p className='text-3xl text-error font-bold mt-10 pb-3'>My Orders({orders.length})</p>
            <div class="w-full shadow-2xl ">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th className='text-center'>Actions</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {orders.reverse()?.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.totalPrice / order.quantity}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td className=''>{(order.paid) ? 'Paid' : <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-success btn-xs">Pay Now</button></Link>}
                                </td>
                                <td className=''><button onClick={() => {
                                    handleDelete(order._id)
                                }} class="btn btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;