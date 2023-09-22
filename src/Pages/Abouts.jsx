import React from 'react';
import Styles from '../Style';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Footer from '../Components/Footer';
import AnimatedCursor from 'react-animated-cursor';

const Abouts = () => {
    return (
        <div>
            <AnimatedCursor />
            <div className={`${Styles.paddingX}`}>
                <Navbar />
            </div>

            <div className="md:ml-24">
                <About />
            </div>

            <Footer />
        </div>
    );
};

export default Abouts;