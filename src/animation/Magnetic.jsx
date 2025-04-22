import { useRef } from "react";
import useMagneticEffect from "./useMagneticEffect";

export default function Magnetic({ children, radius = 100, strength = 0.3 }) {
  const ref = useRef(null);
  const transform = useMagneticEffect(ref, { radius, strength });

  return (
    <div
      ref={ref}
      style={{
        display: "inline-block",
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition:
          transform.x === 0 && transform.y === 0
            ? "transform 0.3s ease-out"
            : "none",
      }}
    >
      {children}
    </div>
  );
}
