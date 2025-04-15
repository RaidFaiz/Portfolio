import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./header.css";
import HoverTrigger from "../animation/HoverTrigger";

export default function Header({ setIsHovered }) {
  const linesRef = useRef([]);

  useEffect(() => {
    const delayTime = 0.01; // Delay to ensure preloader fully fades out

    gsap.set(linesRef.current, { opacity: 0, y: 100 });

    gsap.to(linesRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: delayTime,
    });
  }, []);

  return (
    <div className="header">
      <div className="main-header">
        <HoverTrigger setIsHovered={setIsHovered}>
          <span className="name">rfr</span>
          <h1>
            {["Crafting", "the Extraordinary", "from", "the Ordinary"].map((text, index) => (
              <div key={index} ref={(el) => (linesRef.current[index] = el)} className={index === 1 ? "highlighted-h1" : ""}>
                {text}
              </div>
            ))}
          </h1>
          <span className="quote">-A Step Toward Greatness</span>
        </HoverTrigger> 
      </div>      
    </div>
  );
}

