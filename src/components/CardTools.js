import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardTools = ({ tool }) => {
    const navigate = useNavigate();
    return (
        <div className="card max-w-lg shadow-xl">
            <figure><img src={tool.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    {tool.name}
                    <div className="badge badge-error">{tool?.offer}</div>
                </h2>
                <p className='text-justify'>{tool.description}</p>
                <p className='text-justify font-bold'>Price: ${tool.price}</p>
                <p className='text-justify font-bold'>Min Order: {tool.order} Unit</p>
                <p className='text-justify font-bold'>Available Order: {tool.available} Unit</p>
                <div className="card-actions justify-center">
                    <Link className='btn  btn-error ' to="/purchase">Buy now</Link>
                    <Link className='btn  btn-error ' to="/purchase">Details</Link>

                    
                </div>
            </div>
        </div>
    );
};

export default CardTools;