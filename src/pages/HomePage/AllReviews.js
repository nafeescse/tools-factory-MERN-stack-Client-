import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CardReview from './CardReview';

const AllReviews = () => {
    const [user] = useAuthState(auth)
    const [allReviews, setallReviews] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setallReviews(data)
                })
        }
        else {
            <Loading></Loading>
        }
    }, [])
    // console.log(allReviews);


    return (
        <div className='my-10'>
            <p className='text-3xl text-center font-bold'>AUTOCAR <span className='text-error'>REVIEWS</span></p>
            <div class="carousel carousel-center max-w-screen mx-auto p-4 space-x-4 bg-white rounded-box">
                {
                    allReviews?.map((review, index) => <CardReview key={index} review={review}></CardReview>)
                }

            </div>
        </div>
    );
};

export default AllReviews;