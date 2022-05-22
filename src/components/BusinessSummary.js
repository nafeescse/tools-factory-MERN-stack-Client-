import React from 'react';
import delivery from '../assets/img/delivery.webp'
import support from '../assets/img/support.webp'
import discount from '../assets/img/discount.webp'
import { GrDeliver } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
const BusinessSummary = () => {
    return (
        <div className="bg-secondary grid grid-cols-1 lg:grid-cols-3 justify-items-center">
            <div class="card card-side bg-base-100 shadow-xl p-6 my-6 mx-10 ">
                <figure><GrDeliver /></figure>
                <div class="flex flex-col mx-5">
                    <h2 class="card-title">FREE DELIVERY</h2>
                    <p> Free shipping on all order</p>

                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl p-5 my-6 mx-10">
                <figure><MdOutlineSupportAgent /></figure>
                <div class="flex flex-col mx-5">
                    <h2 class="card-title">24/7 SUPPORT
                    </h2>
                    <p> Support online 24 hours</p>

                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl p-5 my-6 mx-10">
                <figure><MdOutlineSupportAgent /></figure>

                <div class="flex flex-col mx-5">
                    <h2 class="card-title">MEMBER DISCOUNT
                    </h2>
                    <p> Onevery order over $30.00</p>

                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;