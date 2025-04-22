// MaskedCursor.jsx
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import "./maskcursor.css";

export default function MaskedCursor({ size, scrollY }) {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="mask-cursor"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y + scrollY - size / 2}px`,
        maskPosition: `${x - size / 2}px ${y + scrollY - size / 2}px`,
        WebkitMaskSize: `${size}px`,
        maskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    />
  );
}
