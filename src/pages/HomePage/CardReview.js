import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CardReview = ({ review }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="carousel-item">
            <div className="card w-[500px] mx-auto bg-error text-primary-content">
                <div className="card-body">
                    <div className='flex justify-start items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img || `https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png`} alt='' />
                            </div>
                        </div>
                        <div className='flex flex-col mx-4 items-start'>
                            <h2 className="card-title text-justify text-3xl">{review.name || user.displayName || user.email}</h2>
                            <p>{review.phone}</p>
                            <p className='text-xl'>{review.ratings}star</p>
                        </div>
                    </div>
                    <p className='text-start text-xl '>{review.review}</p>
                </div>
            </div>
        </div>

    );
};

export default CardReview;