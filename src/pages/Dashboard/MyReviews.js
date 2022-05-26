import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import img from '../../assets/img/rate-us-png-photo.png';
import CardReview from '../HomePage/CardReview';
import { useNavigate } from 'react-router-dom';

const MyReviews = () => {
    const [user] = useAuthState(auth)
    const [rating, setRating] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://morning-crag-21766.herokuapp.com/profile/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setProfile(data));
            fetch(`https://morning-crag-21766.herokuapp.com/reviews/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setReviews(data))
        }
        else {
            <Loading></Loading>
        }
    }

        , [profile, reviews])
    // console.log();



    const handleReview = event => {
        event.preventDefault();
        const ratings = rating;
        const review = event.target.review.value;
        if (!profile.img) {
            toast('Please update your profile first !!');
            navigate('/dashboard/profile');
        }
        else {
            const reviews = {
                name: profile.name,
                phone: profile.phone,
                img: profile.img,
                ratings: ratings,
                review: review,
                email: profile.email,
            }
            fetch('https://morning-crag-21766.herokuapp.com/reviews', {
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
        }

    }
    return (
        <div>
            <form onSubmit={handleReview} className='w-1/2 mx-auto my-10'>
                <div>
                    <img src={img} alt="" />
                    <p className='text-4xl font-bold mb-5' component="legend">Rate Us Now</p>
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
            <p className='text-5xl text-center font-bold my-5'>My <span className='text-error'>Reviews({reviews.length})</span></p>
            <div className='grid grid-cols-1  lg:grid-cols-2 gap-5 mx-10'>

                {
                    reviews.map(review => <CardReview key={review._id} review={review}></CardReview>


                    )
                }
            </div>



        </div>
    );
};

export default MyReviews;