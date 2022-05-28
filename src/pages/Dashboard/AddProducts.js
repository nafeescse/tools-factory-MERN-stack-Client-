import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddingModal from './AddingModal';
import Products from '../HomePage/Products';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();



    const handleAddProduct = event => {
        const name = event.name;
        const img = event.img;
        const offer = event.offer;
        const qty = event.qty;
        const price = event.price;
        const available = event.available;
        const description = event.description;




        const items = {
            name: name,
            img: img,
            available: available,
            offer: offer,
            order: qty,
            price: price,
            description: description
        }
        fetch('https://morning-crag-21766.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Items Added successfully!!!');
                navigate('/');
            })
        console.log(items);


    }


    return (
        <div className='px-5 py-10'>
            <p className='text-3xl text-center font-bold'>ADD NEW <span className='text-error'>TOOLS</span></p>
            <div className='card shadow-2xl shadow-error w-3/4 md:w-1/2 lg:w-1/2 mx-auto flex items-center p-5'>
                <form onSubmit={handleSubmit(handleAddProduct)} className='  text-neutral form-control w-full max-w-lg flex items-center'>

                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Your Name</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name")} />

                    </div>
                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Photo URL</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("img")} />

                    </div>
                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Price</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-xs" {...register("price")} />

                    </div>
                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Offer(%)</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-xs" {...register("offer")} />

                    </div>

                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Quantity(Min)</span>

                        </label>
                        <input type="qty" className="input input-bordered w-full max-w-xs" {...register("qty")} />
                        {/* <small className='text-error mt-1'>{errors.qty?.message}</small> */}
                    </div>
                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Available Quantity</span>

                        </label>
                        <input type="qty" className="input input-bordered w-full max-w-xs" {...register("available")} />
                        {/* <small className='text-error mt-1'>{errors.qty?.message}</small> */}
                    </div>
                    <div className="form-control w-full max-w-xs text-neutral">
                        <label className="label">
                            <span className="">Description</span>

                        </label>
                        <input type="qty" className="input input-bordered w-full max-w-xs" {...register("description")} />
                        {/* <small className='text-error mt-1'>{errors.qty?.message}</small> */}
                    </div>

                    <input type="submit" value='Confirm' className='btn btn-active btn-error max-w-lg px-10 mt-5' />


                </form>
            </div>

            <Products></Products>
        </div>
    );
};

export default AddProducts;