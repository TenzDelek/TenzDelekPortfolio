'use client';
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
export default function Magnetic({children}) {
  const ref=useRef(null);
  const [pos,setPos]=useState({x:0,y:0});
  const mouseMove=(e)=>{
    const{clientX,clientY}=e;
    const{width,height,left,top}=ref.current.getBoundingClientRect();
    const x=clientX-(left+width/2);
    const y=clientY-(top+height/2);
    setPos({x,y})
  }
  const mouseLeave=()=>{
    setPos({x:0,y:0})
  }
  const{x,y}=pos;
    return (
   <motion.div 
   onMouseMove={mouseMove}
   onMouseLeave={mouseLeave}
   ref={ref}
   animate={{x,y}}
   transition={{type:"spring",stiffness:150,damping:50,mass:0.2}}
   >
    {
        children
    }
   </motion.div> 
  )
}

