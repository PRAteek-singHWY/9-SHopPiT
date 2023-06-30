import React from 'react'
import Auth_Login from '../Auth/Auth_Login'
import { motion, AnimatePresence } from 'framer-motion';
// import {AiOutlineLogOut} from "react-icons/ai"
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { fadeAnimation } from '../config/motion';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const LogIn = () => {
  return (
    <motion.section className=" ALL flex items-center justify-center z-10 bg-pink-200 ">



<Link to="/">
<button
  className="w-14 h-8 rounded-md absolute right-10 top-8 hover:bg-pink-500 hover:text-pink-200 text-sm font-bold border-pink-500 border
   bg-transparent text-pink-500"
>
  Home
</button>
</Link>
<motion.header >
          <img src="./shoppit.png" alt="logo" className=" h-64 w-68 -mt-28 mr-80 object-contain absolute right-[50%]" />
        </motion.header>

<motion.div className='w-[330px]'>
    <Auth_Login/>
</motion.div>
    </motion.section>
  )
}

export default LogIn