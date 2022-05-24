import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';

const BuyModal = ({ tool }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    let date = new Date();
    const navigate = useNavigate();


    const handleBooking = event => {
        const qty = event.qty;
        const price = tool.price;
        const phone = event.phone;
        const address = event.address;




        const order = {
            orderId: tool._id,
            name: tool.name,
            minQty: tool.order,
            available: tool.available,
            quantity: qty,
            totalPrice: qty * price,
            phone: phone,
            address: address,
            user: user.displayName,
            email: user.email
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Order Placed successfully!!!');

                navigate('/');
            })
        console.log(order);


    }


    return (
        <div>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-neutral">✕</label>


                    <form onSubmit={handleSubmit(handleBooking)} className='  text-neutral form-control w-full max-w-lg'>
                        <div className="form-control w-full max-w-xs text-neutral">
                            <label className="label">
                                <span className="">Enter quantity</span>

                            </label>
                            <input tool={tool} type="qty" className="input input-bordered w-full max-w-xs" {...register("qty", {
                                min: {
                                    value: `${tool.order}`,
                                    message: `Quantity must be greater than ${tool.order}` // JS only: <p>error message</p> TS only support string
                                },
                                max: {
                                    value: ` ${tool.available}`,
                                    message: `Quantity must be less than ${tool.available}` // JS only: <p>error message</p> TS only support string
                                },
                            })} />
                            <small className='text-error mt-1'>{errors.qty?.message}</small>
                        </div>
                        <div className="form-control w-full max-w-xs text-neutral">
                            <label className="label">
                                <span className="">Your Phone Number</span>

                            </label>
                            <input type="phone" className="input input-bordered w-full max-w-xs" {...register("phone")} />

                        </div>
                        <div className="form-control w-full max-w-xs text-neutral">
                            <label className="label">
                                <span className="">Your Address</span>

                            </label>
                            <input tool={tool} type="address" className="input input-bordered w-full max-w-xs" {...register("address")} />

                        </div>

                        <input type="submit" value='Confirm' className='btn btn-active btn-error max-w-lg  mt-5' />


                    </form>


                </div>
            </div>
        </div>
    );

};

export default BuyModal;