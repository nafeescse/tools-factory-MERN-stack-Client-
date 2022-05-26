import React from 'react';
import AllReviews from './AllReviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from '../Shared/Header';
import Products from './Products';

const Home = () => {
    return (
    
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <AllReviews></AllReviews>
            </div>
    );
};

export default Home;