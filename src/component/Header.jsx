'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./header.css";
import useMousePosition from "../animation/useMousePosition";
import { motion } from "framer-motion"

import { useState } from 'react';

export default function Header() {
  const linesRef = useRef([]);
  const maskRef = useRef([]);

  useEffect(() => {
    const delayTime = 0.01; // Delay to ensure preloader fully fades out

    gsap.set(linesRef.current, { opacity: 0, y: 100 });
    gsap.set(maskRef.current, { opacity: 0, y: 100 });

    gsap.to(linesRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: delayTime,
    });
    gsap.to(maskRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: delayTime,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const { x , y} = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <div className="header">

      <motion.div
       className="mask"
       animate={{
        WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`, // Initial position
        maskPosition: `${x - size/2}px ${y - size/2}px`,
        WebkitMaskSize: `${size}px`,
        maskSize: `${size}px`,
       }}
       transition={{type: 'tween', ease: 'backOut'}}
      >
        <div className="mask-container"
          onMouseEnter={() => {setIsHovered(true)}}
          onMouseLeave={() => {setIsHovered(false)}}
        >
          <span className="name">raid faiz ridha</span>
          <h1>
            {["Designing", "the experiences", "elevating", "possibilities"].map((text, index) => (
              <div key={index} ref={(el) => (maskRef.current[index] = el)}>
                {text}
              </div>
            ))}
          </h1>
          <span>-One Step Closer to Mastery</span>
        </div>
      </motion.div>

      <div className="main">
        <span className="name">rfr</span>
        <h1>
          {["Crafting", "the Extraordinary", "from", "the Ordinary"].map((text, index) => (
            <div key={index} ref={(el) => (linesRef.current[index] = el)} className={index === 1 ? "highlighted-h1" : ""}>
              {text}
            </div>
          ))}
        </h1>
        <span>-A Step Toward Greatness</span>
      </div>
      
    </div>
  );
}

