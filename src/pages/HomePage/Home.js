import React from 'react';
import AllReviews from './AllReviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from '../Shared/Header';
import Products from './Products';
import Footer from '../Shared/Footer';
import Countdown from './Countdown';
import OurClient from './OurClient';
import ExtraSec from './ExtraSec';

const Home = () => {
    return (
    
        <div>
            <Banner></Banner>
            {/* <Countdown></Countdown> */}
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <AllReviews></AllReviews>
            <OurClient></OurClient>
            <ExtraSec></ExtraSec>

            <Footer></Footer>
            </div>
    );
};

export default Home;