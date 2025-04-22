import { useEffect, useState } from "react";
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
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="page-container">
          <MaskedLayer />
          <div className="main">
            <Navbar />
            <SocialMedia />
            <Header />
            <About />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
