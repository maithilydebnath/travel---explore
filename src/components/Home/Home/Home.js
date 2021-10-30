import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;