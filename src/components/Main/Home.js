import React from 'react';
import Appointment from '../Home/Appointment';
import Banner from '../Home/Banner';
import Services from '../Home/Services';
import Summary from '../Home/Summary';
import Testimonial from '../Home/Testimonial';
import Treatment from '../Home/Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;