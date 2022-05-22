import React from 'react';
import Banner from '../components/Banner';
import BusinessSummary from '../components/BusinessSummary';
import Header from '../components/Header';
import Products from '../components/Products';

const Home = () => {
    return (
    
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            </div>
    );
};

export default Home;