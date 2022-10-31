import React from 'react';
import FlowersBanner from './FlowersBanner';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <div className='bg-queen-pink'>
            <Header />
            <FlowersBanner />
            <Footer />
        </div>
    );
};

export default Home;