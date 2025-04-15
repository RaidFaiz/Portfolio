'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../animation/useMousePosition";
import './MaskedLayer.css'
import gsap from "gsap";
import HoverTrigger from "../animation/HoverTrigger";

export default function MaskedLayer() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverSize, setHoverSize] = useState(500)

  const maskRef = useRef([]);

  useEffect(() => {
    const delayTime = 0.01; // Delay to ensure preloader fully fades out

    gsap.set(maskRef.current, { opacity: 0, y: 100 });

    gsap.to(maskRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: delayTime,
    });
  }, []);

  useEffect(() => {
    const updateHoverSize = () => {
      if (window.innerWidth < 1700) {
        setHoverSize(420)
      } else {
        setHoverSize(500)
      }
    }

    updateHoverSize()
    window.addEventListener("resize", updateHoverSize)

    return () => window.removeEventListener("resize", updateHoverSize);
  }, [])

  const { x, y } = useMousePosition();
  const size = isHovered ? hoverSize : 40;

  return (
    <motion.div
      className={`masked ${isHovered ? 'masked-color' : ''}`}
      animate={{
      WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`, // Initial position
      maskPosition: `${x - size/2}px ${y - size/2}px`,
      WebkitMaskSize: `${size}px`,
      maskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    >
      <div className="masked-header-container">
        <HoverTrigger setIsHovered={setIsHovered}>
          <span className="name">Raid Faiz Ridha</span>
          <h1>
            {["Designing", "the experiences", "elevating", "possibilities"].map((text, index) => (
              <div key={index} ref={(el) => (maskRef.current[index] = el)}>{text}</div>
            ))}
          </h1>
          <span className="quote">- One Step Closer to Mastery</span>
        </HoverTrigger>        
      </div>
      <div className="masked-about-container">
        <div className="masked-about">
          <HoverTrigger setIsHovered={setIsHovered}>
            <h2>about</h2>
            <p>
              CREATIVE FRONT-END DEVELOPER SHAPING MODERN WEB INTERFACES  
              WITH A FOCUS ON SIMPLICITY, SPEED, AND USER EXPERIENCE.

              I BUILD INTERFACES THAT MERGE FUNCTION WITH AESTHETICS ✦  
              CRAFTING CLEAN, RESPONSIVE DESIGNS THAT FEEL NATURAL TO USE.            
            </p>
          </HoverTrigger>           
        </div>
      </div>
    </motion.div>
  );
}

