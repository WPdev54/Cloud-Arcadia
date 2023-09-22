import React from 'react';
import { stats } from '../Contants';
import Styles from '../Style';

const Stats = () => {
    return (
            <section className={`${Styles.flexCenter} flex justify-center w-full sm:flex-row flex-col flex-shrink mt-9 `}>
            {stats.map((stat) =>(

                <div key={stat.id} className={`${Styles.paddingX} flex-1 flex justify-center  items-center flex-row m-3`}>
                    <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                    <p className='font-poppins sm:text-[18px] text-[15px] xs:leading-[26px] relative top-[2.5px]  leading-[21px] bg-blue-gradient2 font-black '>{stat.title}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;