// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
// import Styles from '../Style';

const Navbar = () => {

    const [toogle, setToogle] = useState(false);


    return (
        <nav className={`w-full flex py-6 justify-between items-center navbar`}>

            <div className="logo">
                <h1 className='cursor-pointer bg-gradient-to-tl from-emerald-300 to-indigo-400 bg-clip-text text-transparent text-2xl font-semibold'>CloudArcadia</h1>
            </div>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">

                <li><Link className='mr-12' to="/">Home</Link></li>
                <li><Link className='mr-12' to="/about">About</Link></li>
                <li><Link className='mr-12' to="/features">Feature</Link></li>
                <li><Link className='mr-12' to="/pricing">Pricing</Link></li>

            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toogle ? close : menu}
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToogle((prev) => !prev)}
                />


                <div
                    className={`${toogle ? 'flex' : 'hidden'} p-10 px-28 text-center animasa bg-black-gradient absolute top-20  mx-4 my-2 min-w-[140px] rounded-xl `}
                >

                    <ul className="z-20 list-none flex flex-col  justify-end items-center flex-1">

                        <li className='mb-5'><Link className='mr-12 px-4 ' to="/">Home</Link></li>
                        <li className='mb-5'><Link className='mr-12 px-4 ' to="/about">About</Link></li>
                        <li className='mb-5'><Link className='mr-12 px-4 ' to="/features">Feature</Link></li>
                        <li><Link className='mr-12' to="/pricing">Pricing</Link></li>


                    </ul>
                </div>
            </div>

            <div className="">
                <Link to="/register" className='text-white bg-green-600 px-5 py-2 rounded-2xl hover:bg-amber-800 hidden md:block justify-end'>Register</Link>
            </div>



        </nav>
    );
};

export default Navbar;