import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo from '../../assets/img/404.png'


const NotFound = () => {
    const navigate =  useNavigate();
    return (
        <div className='flex flex-col items-center bg-black'>
        <img src={photo} alt="" />
        <div className='my-3'><button onClick={() => {navigate('/')}} className='bg-black border border-black text-white'>Back to Home</button></div>
        
    </div>
    );
};

export default NotFound;