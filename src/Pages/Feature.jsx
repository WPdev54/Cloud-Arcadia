import React from 'react';
import Features from '../Components/Features';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Styles from '../Style';
import AnimatedCursor from 'react-animated-cursor';


const Feature = () => {
    return (
        <div>
            <AnimatedCursor />            
            <div className={`${Styles.paddingX}`}>
            <Navbar />
            </div>
            <Features />
            <Footer />
        </div>
    );
};

export default Feature;