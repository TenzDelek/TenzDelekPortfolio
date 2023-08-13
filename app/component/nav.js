'use client'
import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Magnetic from "./magnetic";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import Link from "next/link";
const Nav = () => {
  return (
    <div className="mai">
       <Magnetic><div className="contact"><img src="./logo2.png"/></div></Magnetic>
      
      <motion.div initial={{opacity:0}} exit={{opacity:1}} animate={{opacity:1}} className="ma">
      <div>TENZIN</div>
        <div>DELEK</div>
        <div>2023</div>
       <div>CREATIVE</div>
      <div>PORTFOLIO</div>
      </motion.div>
      <div className="dn">
        <div className="innerdn">
        <div className="cirlce">
          <FontAwesomeIcon icon={faSun} className="sizee" /></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
