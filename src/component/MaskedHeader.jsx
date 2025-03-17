import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./header.css";

export default function MaskedHeader() {
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

    return (
        <div className="mask-container">
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
    )
}

