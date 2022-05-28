import React, { useEffect, useState } from 'react';
import CardTools from './CardTools';
import Loading from '../Shared/Loading';

const Products = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-10'>
            <p className='text-3xl text-center font-bold'>AUTOCAR <span className='text-error'>TOOLS</span></p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-8'>
                {!tools.length && <Loading></Loading>}

                {
                    tools.slice(0, 6).reverse().map(tool => <CardTools tool={tool} key={tool.id}></CardTools>)
                }
                
            </div>
            <div className='flex justify-center'>
                    <button className="btn btn-error font-bold text-white text-xl">See all Products</button>
                </div>

        </div>
    );
};

export default Products;