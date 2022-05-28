import React from 'react';

const OurClient = () => {
    return (
        <div >

            <p className='text-3xl text-center font-bold'>HAPPY <span className='text-error my-5'>CLIENTS</span></p>
            {/* <p>For the last 20 years now we’ve been supplying our automotive solutions to many of the biggest OEM’s and Tier 1’s in the world</p> */}
            <div class="card w-11/12 mx-auto bg-error shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mb-10">
                <figure ><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/01/logo_abrera2.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2020/04/ADIENT.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/03/Audi-logo-na-www.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/04/Logo-Auria-na-www.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/04/logo-Toyota-na-www.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/07/logo_dacia.jpg?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/07/logo_nissan.jpg?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/03/Logo-Mercedes-na-www.png?w=400&h=225" alt="Shoes" /></figure>
                <figure><img className='rounded-2xl' src="https://knaufautomotive.com/wp-content/uploads/2018/04/logo-Toyota-na-www.png?w=400&h=225" alt="Shoes" /></figure>

            </div>
        </div>
    );
};

export default OurClient;