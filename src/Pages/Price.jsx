import React from 'react';
import Pricing from '../Components/Pricing';
import Styles from '../Style';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AnimatedCursor from 'react-animated-cursor';

const Price = () => {
    return (
        <div>
            <AnimatedCursor />
            <div className={`${Styles.paddingX}`}>
                <Navbar />
            </div>
            <div className="py-10">
            <Pricing />
            </div>

            <Footer />
        </div>
    );
};

export default Price;