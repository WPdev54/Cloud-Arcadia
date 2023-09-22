import React from 'react';
import Styles from '../Style'

const Pricing = () => {
    return (
        <section className={`${Styles.flexCenter} justify-center`}>
            <div>
                <div className="heading">
                    <h1 className={`${Styles.heading2} mb-5 text-center`}>Our Pricing</h1>
                </div>

                <div className={`price-cards gap-11 md:flex md:justify-between text-white`}>


                    <div className=" card1 shadow-2xl bg-gradient-to-br w-72  from-zinc-600 to-slate-700 rounded-2xl">
                        <div className="upworld shadow-xl bg-neutral-800 rounded-2xl rounded-bl-[60px] rounded-br-[60px] mb-6 p-9  py-14 ">
                            <div className="card-name ">
                                <p className={`text-gradient text-[28px] mb-2 ${Styles.paragraph}`}>Basic</p>
                            </div>
                            <div className="price">
                                <h3 className='text-emerald-200 text-[20px]'>$ 15/Month</h3>
                            </div>
                        </div>

                        <div className="features leading-9 p-9 list-none">
                            <li>8 GB Ram</li>
                            <li>Amd Ryzen 5 5700-G</li>
                            <li>100 Gb Storage</li>
                            <li>2 Gb GPU Memory</li>
                            <li>600+ Mb/s Internet Speed</li>
                        </div>

                        <div className="button">
                            <button className="shadow-2xl bg-gradient-to-r from-violet-200 to-pink-200 text-black font-bold py-2 px-9 pb-3 mx-auto sm:mb-3 mb-6 rounded-full">
                                Get It
                            </button>
                        </div>

                    </div>

                    <div className=" card2 shadow-2xl bg-gradient-to-br w-72  from-zinc-600 to-slate-700 rounded-2xl">
                        <div className="upworld shadow-xl bg-neutral-800 rounded-2xl rounded-bl-[60px] rounded-br-[60px] mb-6 p-9  py-14 ">
                            <div className="card-name ">
                                <p className={`text-gradient text-[28px] mb-2 ${Styles.paragraph}`}>Advance</p>
                            </div>
                            <div className="price">
                                <h3 className='text-emerald-200 text-[20px]'>$ 45/Month</h3>
                            </div>
                        </div>

                        <div className="features leading-9 p-9 list-none">
                            <li>32 GB Ram</li>
                            <li>Amd Ryzen 7 9900-I</li>
                            <li>1 Tb Storage + SSD</li>
                            <li>8 Gb GPU Memory</li>
                            <li>1.5 Gb/s Internet Speed</li>
                        </div>

                        <div className="button">
                            <button className="bg-gradient-to-r from-violet-200 to-pink-200 text-black font-bold py-2 px-9 mx-auto mb-3 rounded-full">
                                Get It
                            </button>
                        </div>

                    </div>

                    <div className=" card3 shadow-2xl bg-gradient-to-br w-72  from-zinc-600 to-slate-700 rounded-2xl">
                        <div className="upworld shadow-xl bg-neutral-800 rounded-2xl rounded-bl-[60px] rounded-br-[60px] mb-6 p-9  py-14 ">
                            <div className="card-name ">
                                <p className={`text-gradient text-[28px] mb-2 ${Styles.paragraph}`}>Ultimate</p>
                            </div>
                            <div className="price">
                                <h3 className='text-emerald-200 text-[20px]'>$ 85/Month</h3>
                            </div>
                        </div>

                        <div className="features leading-9 p-9 list-none">
                            <li>64 GB Ram</li>
                            <li>Ryzen 9 7950x</li>
                            <li>4 Tb Storage + 1 Tb SSD</li>
                            <li>24 Gb GPU Memory</li>
                            <li>2 Gb/s Internet Speed</li>
                        </div>

                        <div className="button">
                            <button className="bg-gradient-to-r from-violet-200 to-pink-200 text-black font-bold py-2 px-9 mx-auto mb-3 rounded-full">
                                Get It
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Pricing;