import React from 'react';
import "../styles/pages/wanderly.css"

import Logo from "../assets/images/logo.png"
import SignIn from '../components/SignIn';

const Wanderly = () => {
    return (
        <div className="bg-homepage h-screen bg-cover bg-center">
           <img src={Logo} alt="logo" className="w-20 h-auto sm:w-24 md:w-32 lg:w-40 xl:w-48 p-5"/>
           <div className='slogan text-right sm:ml-auto p-10 overflow-hidden w-[50%]'>
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 whitespace-nowrap animate-scroll-right">VOYAGER <br /> PHOTOGRAPHIER <br /> INSPIRER</h1> <br />
                    <p className="text-lg sm:text-base lg:text-3xl text-gray-600 mt-2 leading-relaxed animate-scroll-right">Capturer des moments inoubliables et connectez-vous avec des voyageurs passionnés de photographie.</p>
           </div>
           <SignIn />
        </div>

    );
};

export default Wanderly;