'use client';
import React from "react";
import "./content.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
const Contents = () => {
  const easing=[.3,-.05,0.01,0.99]
  const fadeinleft={
    initial:{
      x:-40,
      opacity:1
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration: .3,
        ease :easing
      }
    }
  }
  const fadeinright={
    initial:{
      x:40,
      opacity:1
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration: .3,
        ease :easing
      }
    }
  }
  const stagger={
animate:{
  transition:{
    staggerChildren:0.1
  }
}
  }
  return (
    <motion.div initial="initial" animate="animate">
    <motion.div variants={stagger} className="outer">
      <motion.div exit={{opacity:0}} variants={fadeinleft} whileHover={{scale:1.02}} whileTap={{scale:0.5}}className="outer1">
        <Link href="/Intro">
        <div className="imgs">
          <img src="./del.webp" height="160px" alt="tenzin" />
        </div>
        <div className="upp">Tashi Delek! My name is </div> <br />
        <span>Tenzin Delek</span>
        <div className="para">
           Final year student in VIT pursuing BCA. I have a keen
          interest working in UX /UI design and Web Development using Next js and Three js.
         Desirable Programming language with 
          JAVA 
        </div> </Link>
        <div className="butto"><a href="mailto:tibetdelek@gmail.com">Contact</a></div>
        
      </motion.div>
       <motion.div exit={{opacity:0}}  variants={fadeinright} whileHover={{scale:1.02}} whileTap={{scale:0.5}} className="outer2">
        <div className="first">
          <CircularProgressbar value="50" />
          <Image
            alt="tenzin3"
            className="tenz"
            src={"/next.png"}
            height={50}
            width={50}
          />
        </div>
        <div className="sec">
          <CircularProgressbar value="60" />
          <Image
            alt="tenzin2"
            className="tenz"
            src={"/data1.png"}
            height={50}
            width={50}
          />
        </div>
        <div className="third">
          <CircularProgressbar value="70" />
          <Image
            alt="tenzin1"
            className="tenz"
            src={"/bb.png"}
            height={50}
            width={50}
          />
        </div>
      </motion.div>
      <div className="outer3">
        <Image
          className="imgs"
          src="/1.jpeg"
          width="200"
          height="200"
          alt="tenzin"
          
        />
      </div>
      <motion.div exit={{opacity:0}}  variants={fadeinright}  className="outer4">
        <motion.div  className="bgb"><Link href="/proj"><h3>Career Milestone</h3></Link></motion.div>
        <h4>Awards and Honours</h4>
      
        <p>Merit Award for Academic exellence</p>
        <p>Hopetown Art Competition Category Winner</p>
        <h4>Experience</h4>
        <p>Core Commitee Member-VIT Animation Club</p>
        <h4>Total Project</h4>
        <p>12- Including Academic Porjects</p>
      </motion.div>
      <motion.div exit={{opacity:0}} variants={fadeinleft}  className="outer5">
      <div className="note">
      </div>
      <div className="textnote">
       <b> Contact</b>
       <p>tibetdelek@gmail.com</p>
      </div>
      </motion.div>
      <div className="outer6">
     <a href="https://www.hackerrank.com/tibetdelek" target="blank" ><div className="firstimg">
      <Image
          className="imgs"
          src="/1222.png"
          width="70"
          height="70"
          alt="tenzin"
        />
      </div></a>
      <a href="https://github.com/TenzDelek" target="blank">
      <div className="firstimg">
      <Image
          className="imgs"
          src="/git.png"
          width="70"
          height="70"
          alt="tenzin"
        />
      </div></a>
      <a href="https://www.linkedin.com/in/tenzin-delek-8a157724b/" target="blank">
      <div className="firstimg">
      <Image
          className="imgs"
          src="/ll.png"
          width="70"
          height="70"
          alt="tenzin"
        />
      </div></a>
      <a href="https://leetcode.com/TenzinDelek/" target="blank">
      <div className="firstimg">
      <Image
          className="imgs"
          src="/12.png"
          width="70"
          height="70"
          alt="tenzin"
        />
      </div></a>
      </div>
      <div className="outer7">
        <div className="left"> 
        <div className="imgss">
        <Image
          src="/11.jpg"
          width="100"
          height="100"
          alt="tenzin"
        />
        </div></div>
       
<div className="right">
<Image
          src="/122.svg"
          width="40"
          height="40"
          alt="tenzin"
          className="tewn"
        />
        <h3>Last Project Worked On</h3>
        <h5>To Do List App(feat. Firebase)</h5>
</div>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Contents;
