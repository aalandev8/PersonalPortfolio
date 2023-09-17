"use client";
import React, {useEffect, useRef} from 'react'
import  './hero.css';
import Typewriter from 'typewriter-effect';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {Divider} from "@nextui-org/react";





const Hero = () => {
  const typewriterRef = useRef(null);

 
  return (
    <div id="home" class="home">
        <div class="box-container">
<div class="content">
  <div class="text">
    <h2>Hello!</h2>
<h1>My name is Facundo<span><Typewriter
  options={{
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    autoStart: true,
    loop: true,
  }}
/></span></h1>
    <p>
      As a Fullstack Web Developer, I create dynamic web experiences, from frontend design to backend functionality. Using the latest technologies, I build scalable and responsive applications, ensuring high-quality code and user satisfaction.
    </p>
    <div className="skills-container">
      <div className="skills">
        <FaHtml5 className="skill-icon" />
        <FaCss3 className="skill-icon" />
        <FaJs className="skill-icon" />
        <FaNodeJs className="skill-icon" />
        <FaDatabase className="skill-icon" />
      </div>
      <Divider />
    </div>
  </div>
 
</div>
<div class="image">
  <img src="photo1.jpeg" alt="Home pic"/>
</div>
  </div>
</div>



  )
}

export default Hero