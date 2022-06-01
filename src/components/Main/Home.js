import React from 'react';
import Banner from '../Home/Banner';
import Services from '../Home/Services';
import Summary from '../Home/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Services></Services>
        </div>
    );
};

export default Home;