'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../animation/useMousePosition";
import './MaskedLayer.css'
import gsap from "gsap";
import HoverTrigger from "../animation/HoverTrigger";
import SVGLineDrawing from '../animation/SVGLineDrawing';
import SVGLineDrawingStraight from "../animation/SVGLineDrawingStraight";

export default function MaskedLayer() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverSize, setHoverSize] = useState(450)
  const [, setScrollTrigger] = useState(0);
  const svgPath = "M295 5H981.804C994.615 5 1005 15.3852 1005 28.1959V28.1959C1005 41.0066 994.615 51.3918 981.804 51.3918H26.8042C14.7621 51.3918 5 61.1538 5 73.1959V73.1959C5 85.238 14.762 95 26.8041 95H96.5";
  const svgPathStraight = "M0 1H85"

  
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
      <div style={{ height: "80px" }}></div> {/* <- Same height as navbar */}
      <div className="masked-header-container">
        <HoverTrigger setIsHovered={(hovered) => setIsHovered(hovered)}>
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
          <HoverTrigger setIsHovered={(hovered) => setIsHovered(hovered)}  style={{ pointerEvents: 'auto' }}>
          <div className="about-desc">            
            <p id='first-paragraph'>            
              CREATIVE FRONT-END DEVELOPER SHAPING MODERN WEB INTERFACES <span className='about-desc-span'>✦</span>
              WITH A FOCUS
              ON <SVGLineDrawingStraight svgPathStraight={svgPathStraight} /> <span className='about-desc-span' id="simplicity-text" >SIMPLICITY</span>, SPEED, AND USER
              <br/>
              EXPERIENCE.                       
              <span className='line-main-container'>
                <SVGLineDrawing svgPath={svgPath} />
              </span>
            </p>
            <p id='second-paragraph'>
              I BUILD INTERFACES THAT MERGE FUNCTION WITH <span className='about-desc-span'>AESTHETICS</span>
              CRAFTING CLEAN, RESPONSIVE DESIGNS THAT FEEL <span className='about-desc-span'>NATURAL</span> TO USE.          
            </p>
      </div>
          </HoverTrigger>  
        </div>
      </div>
    </motion.div>
  );
}
