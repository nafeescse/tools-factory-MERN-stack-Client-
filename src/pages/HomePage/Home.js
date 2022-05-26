import React from 'react';
import AllReviews from './AllReviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from '../Shared/Header';
import Products from './Products';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
    
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <AllReviews></AllReviews>
            <Footer></Footer>
            </div>
    );
};

export default Home;