import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddingModal from './Dashboard/AddingModal';
import Loading from './Shared/Loading';
import auth from '../firebase.init';

const Profile = () => {
    const [orders, setOrders] = useState([]);
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://morning-crag-21766.herokuapp.com/orders/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
        else {
            <Loading></Loading>
        }
    }, [profile])

    useEffect(() => {
        if (user) {
            fetch(`https://morning-crag-21766.herokuapp.com/profile/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setProfile(data))
        }
        else {
            <Loading></Loading>
        }
    }, [])
    console.log(orders);



    const handleEdit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const img = event.target.img.value;
        const uni = event.target.uni.value;
        const link = event.target.link.value;


        const profile = {
            name: name,
            email: user.email,
            phone: phone,
            address: address,
            img: img,
            uni: uni,
            link: link,
        }

        fetch('https://morning-crag-21766.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Profile Edited successfully!!!');
                navigate('/');
            })
        console.log(orders);
    }


    return (
        <div>
            <p className='text-center text-error text-3xl mt-10 uppercase font-semibold'>Profile</p>
            <div className=" bg-error shadow-xl mx-6 lg:mx-12 flex flex-col md:flex-row  rounded-xl">
                <div className="card-body text-lg w-full">
                    <p className='text-justify font-bold text-3xl'>Name: {profile.name || orders.user || user.displayName}</p>
                    <p className='text-justify font-bold'>Email: {orders.email || user.email}</p>
                    <p className='text-justify font-bold'>Phone No: {profile.phone || orders.phone}</p>
                    <p className='text-justify font-bold'>Address: {profile.address || orders.address}</p>
                    <p className='text-justify font-bold'>Education: {profile.uni}</p>
                    <p className='text-justify font-bold'>LinkedIn: {profile.link}</p>

                </div>
                <img className='w-3/4 md:w-1/4 mx-auto  rounded-xl' src={profile.img} alt="" />

            </div>
            <div className='w-3/4 max-w-sm mx-auto'>
                <p className='text-center text-error text-3xl mt-10 uppercase font-semibold'>Update Profile</p>
                <form onSubmit={handleEdit} className='form-control flex flex-col gap-5'>
                    <div>
                        <label className="label">
                            <small className="label-text">Your Name</small>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <label className="label">
                            <small className="label-text">Your Phone Number</small>
                        </label>
                        <input name='phone' type="number" placeholder="Phone" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <label className="label">
                            <small className="label-text">Your address</small>
                        </label>
                        <input name='address' type="text" placeholder="Your Address" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <label className="label">
                            <small className="label-text">Your Photo URL</small>
                        </label>
                        <input name='img' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <label className="label">
                            <small className="label-text">Your Education</small>
                        </label>
                        <input name='uni' type="text" placeholder="Degree/University" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <label className="label">
                            <small className="label-text">Your LinkedIn Profile</small>
                        </label>
                        <input name='link' type="text" placeholder="LinkedIn" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <input type="submit" value="Edit" className="btn btn-accent nput input-bordered w-full max-w-sm" />

                </form>

            </div>
        </div>
    );
};

export default Profile;