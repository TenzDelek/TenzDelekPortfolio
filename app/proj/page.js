'use client'
import React from "react";
import "./pagess.css";
import Link from "next/link";
import {motion} from 'framer-motion'
const Proj = () => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
     <Link href="/"> <div className="outer110">
    <div className="outer41"><h1>PROJECTS</h1>
        
        <motion.div initial={{width:'430px',height:'50px'}}
      animate={{
        width:400,
        height:150,
        transition:{ease:"easeInOut",duration:.4}
      }

      } className="bgb1"><h3>Career Milestone & Projects</h3></motion.div>

      </div>

    </div></Link>
    <motion.div initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{ease:"easeInOut",duration:.4}
      }

      } className="project">
  <div className="proj1">
  <a href="https://tenzdelek.github.io/tenzin-website/" target="blank"> <div className="imgsss">
      <img src="./vit1.png" width={250}/>
    </div></a>
    <div className="two">
      <div className="l"><h3>Vtop Clone</h3><h5>used HTML CSS & Javascript</h5>
      This is a project done during my second year of college. the main concept learned 
      from this is dynamic linking</div>
      <div className="r">
      <div className="imgsss">
      <img src="./vit4.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./vit2.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./vit3.png" width={100}/>
    </div>
      </div>
    </div>
  </div>
  <div className="proj2">
  <a href="https://realestatelearn.pages.dev/" target="blank"><div className="imgsss">
      <img src="./real.png" width={250}/>
    </div></a>
    <div className="two">
      <div className="l"><h3>Real Estate</h3><h5>used React.js </h5>
      This is a project make by watching tutorial from youtube. i learned 
      from this is styling and routing</div>
      <div className="r">
      <div className="imgsss">
      <img src="./real4.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./real2.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./real1.png" width={100}/>
    </div>
      </div>
    </div>
  </div>
  <div className="proj3">
    <a href="https://tenzin-portfolio.vercel.app/" target="blank"><div className="imgsss">
      <img src="./po1.png" width={250}/>
    </div></a>
    <div className="two">
      <div className="l"><h3>Porfolio</h3><h5>used Three.js</h5>
      This is a project done by watching Burno Simon Tutorial. the main concept learned 
      from this how to integrate 3d in web</div>
      <div className="r">
      <div className="imgsss">
      <img src="./po2.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./po3.png" width={100}/>
    </div>
    <div className="imgsss">
      <img src="./po1.png" width={100}/>
    </div>
      </div>
    </div>
  </div>
</motion.div>
    </motion.div>

   );
  
};

export default Proj;
