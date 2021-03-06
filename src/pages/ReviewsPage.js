import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import AllToolsCard from './HomePage/AllToolsCard';
import CardReview from './HomePage/CardReview';
import CardTools from './HomePage/CardTools';
import Loading from './Shared/Loading';

const ReviewsPage = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://morning-crag-21766.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-10'>
            <p className='text-3xl text-center font-bold'>AUTOCAR <span className='text-error'>TOOLS</span></p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-8'>
                {!tools.length && <Loading></Loading>}

                {
                    tools.reverse().map(tool => <CardTools tool={tool} key={tool.id}></CardTools>)
                }

            </div>
            

        </div>
    );
};

export default ReviewsPage;