

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Preloader from "./component/PreLoader";
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import Header from "./component/Header";
import About from "./component/About";
import MaskedLayer from "./component/MaskedLayer";
import Lenis from "lenis";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothWheel: true,
      scrollBehavior: 'auto',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const mainEl = document.querySelector(".main");
      if (mainEl) {
        gsap.fromTo(
          mainEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }
    }
  }, [isLoaded]);
  

  return (
    <>
      {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="page-container">
          <Navbar />
          <SocialMedia />
          <div className="main">
            <Header />
            <About />
          </div>
          <MaskedLayer />
        </div>
      )}
    </>
  );
}

export default App;
