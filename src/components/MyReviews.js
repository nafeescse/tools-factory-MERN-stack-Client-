import { Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const MyReviews = () => {
    const [user] = useAuthState(auth)
    const [rating, setRating] = useState('');
    const [profile, setProfile] = useState('');
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



    const handleReview = event => {
        event.preventDefault();
        const ratings = rating;
        const review = event.target.review.value;

        const reviews = {
            name: profile.name,
            phone: profile.phone,
            img: profile.img,
            ratings: ratings,
            review: review,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Review Addded successfully!!!');
                // navigate('/');
            })

        console.log(reviews);
    }
    return (
        <div>
            <p>My reviews</p>
            <form onSubmit={handleReview} className='w-1/2 mx-auto my-10'>
                <div>
                    <Typography component="legend">Rate Us</Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                            console.log(typeof (rating), rating);
                        }}
                    />
                </div>
                <input name='review' type="text" placeholder='Review Details' class="input input-bordered w-full h-20 max-w-sm" />
                <input type="submit" value="Submit" class="btn btn-primary w-full my-5 max-w-sm" />

            </form>

        </div>
    );
};

export default MyReviews;