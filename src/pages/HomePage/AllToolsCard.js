import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllToolsCard = (props) => {
    const {img, offer, name, order, price , _id, qty ,available, description, } = props.tool;
    // console.log(tool);
    const navigate = useNavigate();
    return (
        <div className="card max-w-lg shadow-2xl  p-2 m-3">
        <figure><img className='rounded-xl h-[250px]' src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title flex justify-between text-2xl">
                {name}
                <div className="badge badge-success text-white">{offer}%</div>
            </h2>
            <p className='text-justify'>{description.slice(0, 100)}hello.....</p>
            
            <p className='text-justify font-bold'>Min Order quantity: {order} Unit</p>
            <p className='text-justify font-bold'>Available Quantity: {available} Unit</p>
            <p className='text-justify font-bold text-4xl'>Price: ${price}</p>
            <div className="card-actions justify-center mt-3">
                <div onClick={() => { navigate(`allReviews/${_id}`) }} className='btn  btn-error text-white px-5 text-xl rounded-lg'>Buy now</div>
                
            </div>
        </div>
    </div>
    );
};

export default AllToolsCard;