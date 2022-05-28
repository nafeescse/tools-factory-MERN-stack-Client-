import React from 'react';

const ExtraSec = () => {
    return (
        <div>
            <p className='text-3xl text-center font-bold'>KEEP IN <span className='text-error my-5'>TOUCH</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center my-10'>
                <figure>
                    <img className='w-5/6 mx-auto rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JypgeuiJve03RAQWR0bL1TLNYHPqghXjQg&usqp=CAU" alt="" />
                </figure>
                <div>
                <p className='text-3xl text-center font-bold pb2'>Contact Us</p>
                    <form className='flex flex-col justify-center items-center'>
                        <input type="text" placeholder="Enter Name" class="input input-bordered border-error w-full max-w-sm my-2 " />
                        <input type="text" placeholder="Enter Email" class="input input-bordered border-error w-full max-w-sm my-2 " />
                        <input type="text" placeholder="Your Message" class="input input-bordered border-error w-full max-w-sm my-2  h-24" />
                        <input type='submit' value='SEND' className='btn btn-error px-10 text-white'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ExtraSec;