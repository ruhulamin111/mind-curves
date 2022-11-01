import React from 'react';
import CategorySelection from './CategorySelection';
import FlowersBanner from './FlowersBanner';
import FlowersDemo from './FlowersDemo';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <div className='bg-queen-pink'>
            <Header />
            <FlowersBanner />
            <CategorySelection />
            <FlowersDemo />
            <Footer />
        </div>
    );
};

export default Home;