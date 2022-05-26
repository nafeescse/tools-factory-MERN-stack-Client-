import React from 'react';
import wirehouse from '../assets/img/wirehouse.png';
import surface from '../assets/img/surface.png';
import cv from '../assets/img/cv.png';
import img from '../assets/img/img.jpg';
const Portfolio = () => {
    return (
        <div className='p-5 overflow-hidden'>
            <p className='text-5xl text-primary font-bold text-left '>Portfolio</p>
            <div className='grid grid-cols-1 md:grid-cols-2 my-20 items-center'>
                <div className='flex flex-col items-center md:items-start   mx-auto'>

                    <p className='text-5xl text-black font-bold '>Hi,</p>
                    <p className='text-5xl text-black font-bold '>I'am Nafees</p>
                    <p className='text-5xl text-black font-bold '>Web Developer</p>
                    <button className="btn btn-primary my-5">Get Resume</button>
                </div>

                <div className=' mx-auto  p-20 max-w-lg'><img src={img} alt="" /></div>
            </div>

            <div className='flex flex-col items-center'>
                <p className='text-5xl text-primary font-bold text-left mb-5'>ABOUT ME</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <img className=' mx-auto my-20 p-10 max-w-lg' src={img} alt="" />
                    <p className='my-auto px-10 md:px-20 text-justify font-bold'><span className='text-xl mb-2'>I am working as a front end developer from the last 3 years having strong command on any design format conversion into Html,(psd to html, xd to html, sketch to html, zeplin to html etc). </span><br />
                        <li>Name: Abdur Rahman</li>
                        <li>Phone: 01521321696</li>
                        <li>Email: <a href="#">abdur17@student.sust.edu</a></li>
                        <li>Education: B.Sc in Physics, SUST</li>
                        <li>Experience: 3+ years in Frontend Development</li>
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center my-20'>
                <p className='text-5xl text-primary font-bold text-left mb-5'>TECHNOLOGY USED</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">HTML5</h2>
                                    <h2 className="">100%</h2></div>
                                <progress className="progress progress-success w-84" value="100" max="100">100%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">CSS3</h2>
                                    <h2 className="">90%</h2></div>
                                <progress className="progress progress-success w-84" value="90" max="100">90%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">JAVASCRIPT(ES6)</h2>
                                    <h2 className="">85%</h2></div>
                                <progress className="progress progress-success w-84" value="85" max="100">85%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">REACT JS</h2>
                                    <h2 className="">90%</h2></div>
                                <progress className="progress progress-success w-84" value="90" max="100">90%</progress>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">ROUTER</h2>
                                    <h2 className="">90%</h2></div>
                                <progress className="progress progress-success w-84" value="90" max="100">90%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">NODE JS</h2>
                                    <h2 className="">80%</h2></div>
                                <progress className="progress progress-success w-84" value="80" max="100">80%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">EXPRESS JS</h2>
                                    <h2 className="">85%</h2></div>
                                <progress className="progress progress-success w-84" value="85" max="100">85%</progress>

                            </div>
                            <div className="card-body">
                                <div className='card-title flex justify-between'><h2 className="">MONGODB</h2>
                                    <h2 className="">85%</h2></div>
                                <progress className="progress progress-success w-84" value="85" max="100">85%</progress>

                            </div>

                        </div>





                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center my-20'>
                <p className='text-5xl text-primary font-bold text-left mb-5'>RECENT PROJECTS</p>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a href="https://wireehouse.web.app/">
                                <img src={wirehouse} alt="" />
                            </a>

                        </div>
                        <p className='text-3xl p-2 tex-primary'>Wirehouse Management</p>

                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a href="https://surfacepro8.netlify.app">
                                <img src={cv} alt="" />
                            </a>

                        </div>
                        <p className='text-3xl p-2 tex-primary'>Smartphone Reviews Site</p>

                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a href="http://nafees.unaux.com/">
                                <img src={surface} alt="" />
                            </a>

                        </div>
                        <p className='text-3xl p-2 tex-primary'>Personal Portfolio</p>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default Portfolio;