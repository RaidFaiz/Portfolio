// components/SVGLineDrawing.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SVGLineDrawingStraight = ({ svgPathStraight }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top+=500',
        scrub: true,
      },
                              
    });
  }, []);

  return (
    <span className="straight-line-container" ref={containerRef}>
      <svg
        width="85"
        height="5"
        viewBox="0 0 85 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            ref={pathRef}
            d={svgPathStraight}
            stroke="#afafaf"
            strokeWidth="5"      // <-- this is the correct way in JSX
            fill="none"
        />
      </svg>
    </span>
  );
};

export default SVGLineDrawingStraight;
