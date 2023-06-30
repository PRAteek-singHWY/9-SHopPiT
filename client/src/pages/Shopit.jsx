import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { BrowserRouter, Link, Route, Routes }
  from "react-router-dom"
//config will be used to setup url of backend
import config from "../config/config";
import { download } from "../assets";

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
  ProductView,
} from "../components";
const Shopit = () => {
  return (

    <motion.section className=" absolute mx-auto p-4 sm:p-8  flex flex-col flex-wrap bg-black w-full h-screen">
      <motion.div className="flex-col  rainbow-text rounded-full w-28 h-28 sm:w-48 sm:h-48 ">
        <motion.div className=" pt-6 sm:pt-11 text-center" {...headTextAnimation} >
          <h1 className=" sm:text-4xl text-1xl text-bold ">
            ShÖP iT
          </h1>
          <h1 className="sm:text-2xl text-sm text-bold ">
            Make It Yours.
          </h1>

          <motion.div className="flex justify-center pr-4" >
            <img
              className="sm:w-16 sm:h-16 h-8 w-8 "
              src="./shop.png"
              alt="shop"
            />
          </motion.div>
        </motion.div>

      </motion.div>

     
      <ProductView />


    </motion.section>
  )
}

export default Shopit