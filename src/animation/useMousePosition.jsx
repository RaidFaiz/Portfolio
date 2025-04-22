// import { useState, useEffect, useRef } from "react";

// export default function useMousePosition() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const lastClientY = useRef(0); // Store last known clientY

//     useEffect(() => {
//         const updateMousePosition = (e) => {
//             lastClientY.current = e.clientY;
//             setMousePosition({
//                 x: e.clientX,
//                 y: e.clientY + window.scrollY,
//             });
//         };

//         const handleScroll = () => {
//             setMousePosition((prev) => ({
//                 x: prev.x,
//                 y: lastClientY.current + window.scrollY,
//             }));
//         };

//         window.addEventListener("mousemove", updateMousePosition);
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("mousemove", updateMousePosition);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return mousePosition;
// }

import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY, // Viewport coordinates
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}
