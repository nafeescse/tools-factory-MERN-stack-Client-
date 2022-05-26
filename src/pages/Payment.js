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
    const [user] = useAuthState(auth)
    const [orderr, setOrderr] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (user) {
            const url = `https://morning-crag-21766.herokuapp.com/orders/${id}`;
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
    }, [id])


    console.log(orderr);
    return (
        <div>
            <h2 className='text-3xl text-success'> Please pay for : {id}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-5'>
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <p>Hello {orderr?.email} </p>
                        <h2 class="card-title">Card title!</h2>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
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