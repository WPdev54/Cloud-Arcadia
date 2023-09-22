import React from 'react';
import aboutImg from '../assets/16329746_Kerfin7_NEA_2332-removebg-preview.png'
import Styles , {layout} from '../Style';

const About = () => {
    return (
        <section className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionInfo}`}>
                <div className={`${Styles.heading2}  heading`}>
                    <h1 className='bg-gradient-to-br text-transparent bg-clip-text from-cyan-500 to-lime-400 mb-7 '>About US</h1>
                </div>
                <div className="text">
                    <p className='text-[24px] text-gray-300'>We Provide High Quality Cloud Gaming Experience. We offer an extensive library of games spanning various genres and eras, ensuring that there's always something for everyone. From AAA titles to indie gems, you'll find it all here.We believe that gaming should be accessible to all. </p>
                </div>
            </div>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={aboutImg} alt="" />
            </div>
        </section>
    );
};

export default About;