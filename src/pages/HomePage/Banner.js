import React from 'react';

const Banner = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full max-h-[500px]">
                <div class="card rounded-none image-full">
                    <figure className=''><img className='w-screen' src="https://api.lorem.space/image/car" alt="" /></figure>

                    <div class="card-body flex flex-col justify-center">
                        <div className='pb-[15px] md:pb-36'>
                            <h2 class=" text-center text-2xl md:text-6xl py-5 font-bold">Best Car Parts Collection</h2>
                            <p className='hidden md:block text-2xl px-10'>We at Autocar Industries use our experience as a long-standing partner to the automotive industry to develop insulation solutions for commercial vehicles and passenger cars.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>

                    </div>

                </div>



            </div>
            <div id="slide2" className="carousel-item relative w-full max-h-[500px]">
                <div class="card rounded-none image-full">
                    <figure className=''><img className='w-screen' src="https://api.lorem.space/image/car?hash=A89D0DE9" alt="" /></figure>

                    <div class="card-body flex flex-col justify-center">
                        <div className='pb-[15px] md:pb-36'>
                            <h2 class=" text-center text-2xl md:text-6xl py-5 font-bold">Best Car Parts Collection</h2>
                            <p className='hidden md:block text-2xl px-10'>We at Autocar Industries use our experience as a long-standing partner to the automotive industry to develop insulation solutions for commercial vehicles and passenger cars.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>

                    </div>

                </div>



            </div>
            <div id="slide3" className="carousel-item relative w-full max-h-[500px]">
                <div class="card rounded-none image-full">
                    <figure className=''><img className='w-screen' src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt="" /></figure>

                    <div class="card-body flex flex-col justify-center">
                        <div className='pb-[15px] md:pb-36'>
                            <h2 class=" text-center text-2xl md:text-6xl py-5 font-bold">Best Car Parts Collection</h2>
                            <p className='hidden md:block text-2xl px-10'>We at Autocar Industries use our experience as a long-standing partner to the automotive industry to develop insulation solutions for commercial vehicles and passenger cars.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>

                    </div>

                </div>



            </div>
            <div id="slide4" className="carousel-item relative w-full max-h-[500px]">
                <div class="card rounded-none image-full">
                    <figure className=''><img className='w-screen' src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6652" alt="" /></figure>

                    <div class="card-body flex flex-col justify-center">
                        <div className='pb-[15px] md:pb-36'>
                            <h2 class=" text-center text-2xl md:text-6xl py-5 font-bold">Best Car Parts Collection</h2>
                            <p className='hidden md:block text-2xl px-10'>We at Autocar Industries use our experience as a long-standing partner to the automotive industry to develop insulation solutions for commercial vehicles and passenger cars.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>

                    </div>

                </div>



            </div>

        </div>
    );
};

export default Banner;