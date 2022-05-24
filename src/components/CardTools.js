import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardTools = ({ tool }) => {
    const navigate = useNavigate();



    return (
        <div className="card max-w-lg shadow-xl border-2 border-error pt-2">
            <figure><img className='rounded-xl' src={tool.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    {tool.name}
                    <div className="badge badge-success">{tool?.offer}</div>
                </h2>
                <p className='text-justify'>{tool.description}</p>
                <p className='text-justify font-bold text-4xl'>Price: ${tool.price}</p>
                <p className='text-justify font-bold'>Min Order quantity: {tool.order} Unit</p>
                <p className='text-justify font-bold'>Available Quantity: {tool.available} Unit</p>
                <div className="card-actions justify-center">
                    <div onClick={() => { navigate(`purchase/${tool._id}`) }} className='btn  btn-error'>Buy now</div>
                    <div className='btn  btn-error'>Buy now</div>
                </div>
            </div>
        </div>
    );
};

export default CardTools;