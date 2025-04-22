'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../animation/useMousePosition";
import './MaskedLayer.css'
import gsap from "gsap";
import HoverTrigger from "../animation/HoverTrigger";

export default function MaskedLayer() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverSize, setHoverSize] = useState(450)
  const [, setScrollTrigger] = useState(0);

  const maskRefs = useRef([]);

useEffect(() => {
  const delayTime = 0.01;
  gsap.set(maskRefs.current, { opacity: 0, y: 100 });
  gsap.to(maskRefs.current, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    delay: delayTime,
  });
}, []);

const setMaskRef = (el, index) => {
  if (el) maskRefs.current[index] = el;
};


  useEffect(() => {
    const updateHoverSize = () => {
      if (window.innerWidth < 1700) {
        setHoverSize(420)
      } else {
        setHoverSize(450)
      }
    }

    updateHoverSize()
    window.addEventListener("resize", updateHoverSize)

    return () => window.removeEventListener("resize", updateHoverSize);
  }, [])

  useEffect(() => {
    const onScroll = () => {
      // This forces a re-render so scrollY updates naturally
      setScrollTrigger((val) => val + 1);
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { x, y } = useMousePosition();
  const size = isHovered ? hoverSize : 40;
  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;

  return (
    <motion.div
      className={`masked ${ isHovered ? 'masked-color' : "" }`}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y + scrollY - size / 2}px`,
        maskPosition: `${x - size / 2}px ${y + scrollY - size / 2}px`,
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
              <div key={index} ref={(el) => setMaskRef(el, index)}>{text}</div>
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
