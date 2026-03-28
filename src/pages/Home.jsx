import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Intro from '../components/Intro';
import Services from '../components/Services';
import TechExpertise from '../components/TechExpertise';
import HowItWorks from '../components/HowItWorks';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustBar />
            <Intro />
            <Services />
            <TechExpertise />
            <HowItWorks />
            <Cta />
            <Footer />
        </>
    );
};

export default Home;
