import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { BrowserRouter, Link, Route, Routes }
  from "react-router-dom"
//config will be used to setup url of backend
import config from "../config/config";
import { download } from "../assets";
import Canvas from '../canvas'

//helpers
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, headTextAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  Tab,
  CustomButton,
  FilePicker,
  FormField,
  Card,
  Loader,

} from ".";

import Contact from "./Contact";
const ProductView = () => {
  const handleBuy = () => {
    // Handle buy action
  };


  //size selector 

  const [size, setSize] = useState("Small")
  const [merchant, setMerchant] = useState("Nearest")
  const [wait, setWait] = useState("2-3 days")

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "size") {
      setSize(value);
    } else if (name === "merchant") {
      setMerchant(value);
    } else if (name === "wait") {
      setWait(value);
    }
  };
  
 


  return (

    <motion.section className="flex bg-black justify-between">


      <motion.div
        className="rainbow-text rounded-[12%]  flex flex-col justify-center items-center 
absolute



xl:--->     
        xl:w-[300px] xl:h-[350px]
xl:left-[4%]
        


lg--->
  lg:w-[340px] lg:h-[350px]


md:--->
md:w-[260px] md:h-[320px]
md: md:top-[55%]


sm:--->
  sm:left-[8%] sm:top-[60%]
  sm:w-[250px] sm:h-[300px] 



  xs:--->
        left-[12.5%] top-[47%]
        h-[170px] w-[270px]
   "
      >
        <motion.div

          style={{ position: 'absolute', left: 30, top: 20 }}
        >

          <motion.div className="sm:mt-5 -mt-2">

            <h2>Choose Your Fit</h2>
            <select className="rounded-md" name="size"  onChange={handleSelectChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>

            </select>
          </motion.div>

          <motion.div className="sm:mt-10">
            <h2>Select Merchant</h2>
            <select className="rounded-md" name="merchant"  onChange={handleSelectChange}>
              <option  value="Nearest">Nearest</option>
              <option value="Korgux">Korgux</option>
              <option value="Laurxine">Laurxine</option>
              <option value="primer">primer</option>
              <option value="optimum">optimum</option>
            </select>
          </motion.div>
          <motion.div className="sm:mt-10">
            <h2>Choose Ur Waiting Period</h2>
            <select className="rounded-md" name="wait"  onChange={handleSelectChange}>
              <option value="2-3 days">2-3 days</option>
              <option value="5-7 days">5-7 days</option>
              <option value="1 week">1 week</option>
              <option value="2-3 weeks">2-3 weeks</option>
              <option value="a Month">a Month</option>
            </select>
          </motion.div>
        </motion.div>

      </motion.div>

      <motion.div
        className="mt-16 rainbow-text rounded-[10%]
         absolute


  xl:--->     
        xl:w-[500px] xl:h-[550px]
xl:left-[35.5%]
        
        
  lg:--->      
   lg:w-[390px] lg:h-[380px]
   lg:left-[32.6%] lg:top-[5%] 

        
        
md:--->        
        md:w-[280px] md:h-[320px]  
        md:left-[37%] md:top-[10%] 
        

        
sm:--->        
        sm:h-[300px] sm:w-[250px]
        sm:top-[18%] sm:left-[32%]




xs:--->
        left-[12.5%] top-[12%]
        h-[170px] w-[270px]

        "
      >
        <motion.div className=" flex  mt-4 ml-6   ">
          <p className="text-1xl ">Design-By-Yöu</p>
        </motion.div>


        <Canvas />
      </motion.div>


      <motion.div
        className="rainbow-text rounded-[12%]
        
        absolute
        
          flex flex-col justify-center items-center 
 

 xl:--->     
        xl:w-[300px] xl:h-[350px]
xl:left-[78%]

lg:--->

          lg:w-[340px] lg:h-[350px]
  md:--->
md:w-[260px] md:h-[320px]
md:left-[64.5%] md:top-[55%]




  sm:--->
        sm:left-[55%] sm:top-[60%]
        sm:w-[250px] sm:h-[300px] 


  xs:--->
        left-[12.5%] top-[73.5%]
        h-[170px] w-[270px]
   "
      >
        <motion.div
          className="flex flex-col absolute"
          style={{ left: 30, top: 20 }}
        >

          <Contact 
            size={size}
            merchant={merchant}
            wait={wait}
          />




        </motion.div>

      </motion.div>










    </motion.section>
  );
};

export default ProductView;




