// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./header.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import HoverTrigger from "../animation/HoverTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Header({ setIsHovered }) {
//   const linesRefs = useRef([]);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const delayTime = 0.01; // Delay to ensure preloader fully fades out

//     gsap.set(linesRefs.current, { opacity: 0, y: 100 });

//     gsap.to(linesRefs.current, {
//       y: 0,
//       opacity: 1,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power3.out",
//       delay: delayTime,
//     });
//   }, []);

//   gsap.to(linesRefs.current, {
//     yPercent: 20, // move down a little
//     ease: "none",
//     scrollTrigger: {
//       trigger: headerRef.current,
//       start: "top top", 
//       end: "bottom top",
//       scrub: 1, // smooth parallax
//     },
//   }, []);

//   const setlinesRefs = (el, index) => {
//     if (el) linesRefs.current[index] = el;
//   };

//   return (
//     <>
//     <div className="header" ref={headerRef}>
//       <div className="main-header">
//         <HoverTrigger setIsHovered={setIsHovered}>
//           <span className="name">rfr</span>
//           <h1>
//             {["Crafting", "the Extraordinary", "from", "the Ordinary"].map((text, index) => (
//               <div key={index} ref={(el) => setlinesRefs(el, index)} className={index === 1 ? "highlighted-h1" : ""}>
//                 {text}
//               </div>
//             ))}
//           </h1>
//           <span className="quote">-A Step Toward Greatness</span>
//         </HoverTrigger> 
//       </div>      
//     </div>
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./header.css";
import HoverTrigger from "../animation/HoverTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ setIsHovered }) {
  const linesRefs = useRef([]);
  const headerRef = useRef(null);
  const bgRef = useRef(null); // for background

  useEffect(() => {
    const delayTime = 0.01;

    gsap.set(linesRefs.current, { opacity: 0, y: 100 });

    gsap.to(linesRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: delayTime,
    });

    // --- Parallax background effect ---
    gsap.to(bgRef.current, {
      yPercent: -20, // move slower upwards
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // --- Parallax text ---
    gsap.to(linesRefs.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const setlinesRefs = (el, index) => {
    if (el) linesRefs.current[index] = el;
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="parallax-bg" ref={bgRef}></div>
      <div className="main-header">
        <HoverTrigger setIsHovered={setIsHovered}>
          <span className="name">rfr</span>
          <h1>
            {["Crafting", "the Extraordinary", "from", "the Ordinary"].map((text, index) => (
              <div key={index} ref={(el) => setlinesRefs(el, index)} className={index === 1 ? "highlighted-h1" : ""}>
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
