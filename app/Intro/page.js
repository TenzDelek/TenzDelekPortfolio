'use client';
import React from "react";
import './page.css'
import { motion } from "framer-motion";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="boo">
    <motion.div initial="initial" animate="animate" exit="exit"className="mix">
    <div className="outer11">
    
      <motion.div initial={{width:'630px',height:'420px'}}
      animate={{
        width:1100,
        height:650,
        transition:{ease:"easeInOut",duration:.1}
      }

      }
      
      className="outer12">
        <div className="imgs">
          <img src="./del.webp" height="160px" alt="tenzin" />
           </div>
        <div className="upp1">Tashi Delek! My name is </div> <br />
        <span>Tenzin Delek</span>
        <div className="para">
           Final year student in VIT pursuing BCA. I have a keen
          interest working in UX /UI design and Web Development using Next js and Three js.
         Desirable Programming language with 
          JAVA 
        </div>
        <Link href="/"> <div className="butto1">Home</div></Link>
      </motion.div>
    </div>
    
    </motion.div>

    {/* second */}
       <div className="mix1">
     <div className="school">
      I did my schooling from<span className="tcv">logo</span> 
      Till 12th.
      then i join <span className="vit">vit</span> for my bachelor degree. I love <span className="pic"><img src="./pic.png"/></span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and<span> art</span> apart from that &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I do 3d for fun. I am based in <span className="moun">Northe</span>India
     </div>
       </div>
       </div>
  ); 
};

export default Intro;
