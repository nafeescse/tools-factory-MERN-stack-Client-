import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import BuyModal from './BuyModal';

const Purchase = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://morning-crag-21766.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])
    return (
        <div>

            <p className='text-center text-error text-3xl'>Please complete the purchase order</p>

            <p className='text-center text-error text-3xl mt-10 uppercase'>Customer Details</p>
            <div className="card lg:card-side bg-error shadow-xl mx-6 lg:mx-12">
                <div className="card-body">
                    <h2 className="card-title flex justify-between">
                        {user.displayName}
                    </h2>
                    <p className='text-justify font-bold'>Email: {user.email}</p>
                    <p className='text-justify font-bold'>Phone No: 01792615315</p>

                </div>
            </div>
            <p className='text-center text-error text-3xl mt-10 uppercase'>Product Details</p>
            <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-error mx-6 lg:mx-12">
                <figure className='bg-error'><img className='px-' src={tool.img} alt="Album" /></figure>

                <div className="card-body">
                    <h2 className="card-title flex justify-between">
                        {tool.name}
                        <div className="badge badge-success">{tool?.offer}</div>
                    </h2>
                    <p className='text-justify'>{tool.description}</p>
                    <p className='text-justify font-bold text-4xl'>Price: ${tool.price}</p>
                    <p className='text-justify font-bold'>Min Order quantity: {tool.order} Unit</p>
                    <p className='text-justify font-bold'>Available quantity: {tool.available} Unit</p>
                    <div className="card-actions justify-center">

                        <label htmlFor="buying-modal" className="btn btn-error modal-button text-white">Place Order</label>

                    </div>
                    {
                        tool && <BuyModal key={tool._id} tool={tool}></BuyModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default Purchase;