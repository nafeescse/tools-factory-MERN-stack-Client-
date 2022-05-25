import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';

const AddingModal = () => {
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile/${user.email}`, {
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
    console.log(profile);
    return (
        <div>
            {profile.length}
            <p>{profile.name}</p>
            <p>{profile.uni}</p>
            <p>{profile.link}</p>
            <img src={profile.img} alt="" />
        </div>
    );
};

export default AddingModal;