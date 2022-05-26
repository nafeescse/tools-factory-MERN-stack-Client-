import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-crag-21766.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `https://morning-crag-21766.herokuapp.com/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = products.filter(order => order._id !== id);
            setProducts(rest);

        }
    }



    return (
        <div>

            <div>
                <p className='text-3xl text-error font-bold mt-10 pb-3'>All Products({products.length})</p>
                <div class="w-full shadow-2xl ">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Offer</th>
                                <th>Quantity</th>
                                <th>Available</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {products.reverse()?.map((product, index) =>
                                <tr className='text-center'>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.offer}</td>
                                    <td>{product.order}</td>
                                    <td>{product.available}</td>
                                    <td className=''>
                                        <button onClick={() => {
                                            handleDelete(product._id)
                                        }} class="btn btn-error text-white btn-xs">Delete </button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;