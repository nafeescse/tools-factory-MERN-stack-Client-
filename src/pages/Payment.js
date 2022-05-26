import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import CheckoutForm from './Dashboard/CheckoutForm';
import Loading from './Shared/Loading';

const stripePromise = loadStripe('pk_test_51L3USNLd7zZ2ao66p1fSqEZNa7PTebF1PjldEySGJ74NGAto72w6Ix5aIwXsABGIPo62ISY6BgGK5F6v543Y5meV00cSzRq8IO');



const Payment = () => {

    const { id } = useParams();
    const url = `https://morning-crag-21766.herokuapp.com/orders/${id}`;

    const [user] = useAuthState(auth)
    const [orderr, setOrderr] = useState([]);

    useEffect(() => {
        if (user) {

            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => setOrderr(data))
        }
        else {
            return <Loading></Loading>
        }
    }, [])


    console.log('orders: ', orderr);
    return (
        <div>
            <h2 className='text-3xl text-success'> Please pay for : {id}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-5'>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <p className='text-success text-xl'>Hello  {orderr.user}</p>
                        <h2 className="card-title">Thank you for ordering {orderr.name}</h2>
                        <h2 className="card-title">Please pay  ${orderr.totalPrice}</h2>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orderr={orderr}></CheckoutForm>
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;