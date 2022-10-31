import React from 'react';
import CategorySelection from './CategorySelection';
import FlowersBanner from './FlowersBanner';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <div className='bg-queen-pink'>
            <Header />
            <FlowersBanner />
            <CategorySelection />
            <Footer />
        </div>
    );
};

export default Home;