import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardTools = ({ tool }) => {
    const navigate = useNavigate();



    return (
        <div className="card max-w-lg shadow-2xl  p-2 m-3">
            <figure><img className='rounded-xl h-[250px]' src={tool.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between text-2xl">
                    {tool.name}
                    <div className="badge badge-success text-white">{tool?.offer}%</div>
                </h2>
                <p className='text-justify'>{tool.description.slice(0, 100)}hello.....</p>
                
                <p className='text-justify font-bold'>Min Order quantity: {tool.order} Unit</p>
                <p className='text-justify font-bold'>Available Quantity: {tool.available} Unit</p>
                <p className='text-justify font-bold text-4xl'>Price: ${tool.price}</p>
                <div className="card-actions justify-center mt-3">
                    <div onClick={() => { navigate(`purchase/${tool._id}`) }} className='btn  btn-error text-white px-5 text-xl rounded-lg'>Buy now</div>
                    
                </div>
            </div>
        </div>
    );
};

export default CardTools;