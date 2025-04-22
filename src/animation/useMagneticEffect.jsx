import { useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

export default function useMagneticEffect(ref, options = {}) {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const {
    radius = 100,
    strength = 0.3,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const elX = rect.left + rect.width / 2;
    const elY = rect.top + rect.height / 2;

    const dx = mouseX - elX;
    const dy = mouseY - elY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      setTransform({
        x: dx * strength,
        y: dy * strength,
      });
    } else {
      setTransform({ x: 0, y: 0 });
    }
  }, [mouseX, mouseY, ref, radius, strength]);

  return transform;
}
