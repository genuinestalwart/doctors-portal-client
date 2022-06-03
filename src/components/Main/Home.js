import React from 'react';
import Appointment from '../Home/Appointment';
import Banner from '../Home/Banner';
import ContactUs from '../Home/ContactUs';
import Services from '../Home/Services';
import Summary from '../Home/Summary';
import Testimonial from '../Home/Testimonial';
import Treatment from '../Home/Treatment';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Summary></Summary>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;