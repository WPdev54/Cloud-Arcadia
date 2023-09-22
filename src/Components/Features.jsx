import React from 'react';
import { GiPowerLightning } from 'react-icons/gi';
import { SiPythonanywhere } from 'react-icons/si';
import Styles, { layout } from '../Style';
import FeatureImg from '../assets/Featere-removebg-preview.png';

const Features = () => {
    return (
        <div className={` flex w-[100%] xxl:ml-80 justify-center justify-items-center ${layout.section}`}>
            <div className={`${layout.sectionImg}`}>
                <img className='rounded-full' src={FeatureImg} />
            </div>
            <div className={`${layout.sectionInfo}`}>
                <div className="anywhere hover:bg-slate-800 flex items-center gap-2 rounded-2xl mb-5 bg-[#2c374a] p-5">
                    <SiPythonanywhere className='text-[48px] bg-slate-900 text-slate-300 p-1 rounded-full items-center'/>
                    <div className="text">
                        <h3 className={`text-[24px] text-emerald-300`}>Play Any Games , AnyWhere</h3>
                        <p className={`${Styles.paragraph} text-amber-400`}>Play Any Games Anywhere in The High End CLoud pc</p>
                    </div>
                </div>

                <div className="Fast flex hover:bg-slate-800 items-center gap-2 rounded-2xl mb-5 bg-[#2c374a] p-5">
                    <GiPowerLightning className='text-[48px] bg-slate-900 text-slate-300 p-1 rounded-full items-center'/>
                    <div className="text">
                        <h3 className={`text-[24px] text-emerald-300`}>Fast And Stable</h3>
                        <p className={`${Styles.paragraph} text-amber-400`}>Play Without Lag and Shutter With The Full Graphics </p>
                    </div>
                </div>

                <div className="paly hover:bg-slate-800 flex items-center gap-2 rounded-2xl bg-[#2c374a] p-5">
                    <SiPythonanywhere className='text-[48px] bg-slate-900 text-slate-300 p-1 rounded-full items-center'/>
                    <div className="text">
                        <h3 className={`text-[24px] text-emerald-300`}>Play As You Like</h3>
                        <p className={`${Styles.paragraph} text-amber-400`}>Play Any Games Like Your Own Pc And Enjoy High Perfeomance </p>
                    </div>
                </div>
            </div>
        </div>);
};

export default Features;