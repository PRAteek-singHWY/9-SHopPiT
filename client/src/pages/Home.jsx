import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton, Home_Navabar } from '../components';
import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { fadeAnimation } from '../config/motion';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Canvas from '../canvas'
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Auth from '../Auth/Auth_Register';
const Home = () => {
  const snap = useSnapshot(state);
  const user = false
  return (


    <div className=''>

    <AnimatePresence>

   
      <motion.section className="ALL    bg-gradient-to-br from-orange-800 via-black
        to-purple-900">

        <motion.header {...slideAnimation('down')}>
          <img src="./shoppit.png" alt="logo" className="md:w-28 md:h-28 h-20 w-20 object-contain md:-mt-8 -mt-6 xl:mt-1   " />
          
        </motion.header>
        <motion.div className="home-content z-10" {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className="
            md:text-7xl
            text-2xl
             font-bold text-yellow-400 xl:-mt-24 
             lg:-mt-[5%] -mt-8 absolute">DėSiGN  iT</h1>
          </motion.div>
          <motion.div>
            <h1 className="text-2xl font-bold   ">
              <span className="text-yellow-400 md:text-4xl  md:mt-[0.01%] -mt-9 -lg:mt-4  xl:-mt-[3%] absolute  ">And Make It Yours .</span>
            </h1>
          </motion.div>
          <motion.div {...headContentAnimation} className="flex flex-col gap-5">
            <p className="max-w-md font-normal text-base text-yellow-400  md:mt-6 md:ml-90 -mt-8 xl:-mt-[3%]">
              Create Your Own Designed shirts with our brand-new 3D customization tool{' '}
              <strong>UnleasH YouR ImaginatioN </strong> and define your Own styles .
            </p>
          </motion.div>
        </motion.div>
        <Canvas />
      </motion.section>
    </AnimatePresence>
    </div>

  );
};
export default Home;
