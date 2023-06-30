import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './CustomButton';
import { fadeAnimation } from '../config/motion';
import { menu, close } from '../assets'
import { BrowserRouter, Link, Route, Routes, useLocation }
  from "react-router-dom"
const Home_Navabar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="w-full h-[53px] ">
      {/* ON SCREENS GREATER THAN EQUAL TO LARGE */}
      <motion.div className="lg:block hidden   ">
        <div className='flex justify-between gap-3 absolute  left-7 mt-1.5' >
          <Link
            to="/"
            className="font-inter font-medium bg-black text-[#ed9e4a] px-4 py-2 rounded-lg    ">
            Home
          </Link>
          <Link
            to="/customise"
            className="font-inter font-medium bg-black text-[#ed9e4a] px-4 py-2 rounded-lg ">
            Customise it
          </Link>
          <Link
            to="/designs"
            className="font-inter font-medium bg-black text-[#ed9e4a] px-4 py-2 rounded-lg    ">
            Designs
          </Link>
          <Link
            to="/shopit"
            className="font-inter font-medium bg-black text-[#ed9e4a] px-4 py-2 rounded-lg">
            Shop
          </Link>
        </div>
         
          {/* <button
          className='flex  w-11 h-11 rounded-lg mr-2 bg-black text-[#ed9e4a] text-center items-center justify-center  gap-3 absolute right-6 mt-1 '
          >h</button> */}
      </motion.div>



      {/* ON SCREENS SMALLER THAN MEDIUM */}
      <motion.div className="  lg:hidden absolute  right-7 mt-3 ml-4 z-20  ">

        {/* //ham burger and and close button images on toggling // */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {/* on clicking the menu showing the actual menu */}
        {/* step-1 creating our menu when scrolls or u can say opens down */}

        <div className={`${!toggle ? "hidden" : "flex"}
           p-6   top-20 right-0 mx-4 my-2 min-w-[100px] min-h-[100px]z-10 rounded-xl
           `}>
          {/* ul navigation bar */}
          <ul className="list-none flex justify-end items-start flex-col gap-4  rounded-md bg-[#ed9e4a]">
{/* <li>
          <Link to="/profile">
          <div className=' w-10 h-10 ml-8 mt-1.5 -mb-4 bg-black font-bold pt-0.5 text-[26px] text-[#ed9e4a] text-center rounded-full'>
          <button>

          
          </button>
            
          </div>
        </Link>
</li> */}
          <Link to="/">
              <li
                onClick={() => {
                  setToggle(!toggle)
                }}

              >
                {/* //customise Button */}
                <button
                  className="w-fit px-3   font-bold pt-2 text-[16px] text-black rounded-full 
                   "
                >
                  Home
                </button>
              </li>
            </Link>
<Link to="/customise">
              <li
                onClick={() => {
                  setToggle(!toggle)
                }}

              >
                {/* //customise Button */}
                <button
                  className="w-fit px-3  font-bold py-0.1 text-[16px] text-black rounded-full 
                   "
                >
                  Customise
                </button>
              </li>
              </Link>
            <Link to="/designs">
              <li
                onClick={() => {
                  setToggle(!toggle)
                }}

              >
                {/* //customise Button */}
                <button

                  className="w-fit px-3  font-bold py-0.1 text-[16px] text-black rounded-full mt-1
                   "
                >
                  Designs
                </button>
              </li>
            </Link>

            <li
              onClick={() => {
                setToggle(!toggle)
              }}
              className="z-10"
            >
              <Link to="/shopit">

                {/* //customise Button */}
                <button

                  className="w-fit px-3 pb-2 font-bold  text-[16px]  
                    text-black
                   "
                >
                  Shop
                </button>
              </Link>

            </li>
            



          </ul>
        </div>
      </motion.div>

    </header>

  )
}

export default Home_Navabar