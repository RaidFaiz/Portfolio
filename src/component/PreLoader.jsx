import { useState, useEffect, useRef } from "react";
import { preLoaderAnim } from "../animation/preLoaderAnim";
import "./preloader.css";
import logo from "../assets/logo.svg";

const Preloader = ({ onStart }) => {
  const [progress, setProgress] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [startClicked, setStartClicked] = useState(false);

  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const loadingBarRef = useRef(null);
  const loadingFillRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalAssets = images.length + 1; // +1 for fonts
    let loadedAssets = 0;
  
    const updateProgress = () => {
      loadedAssets++;
      const newProgress = totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 100;
      setProgress(newProgress);
    };
  
    // Track image loading
    if (images.length === 0) {
      updateProgress();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress, { once: true });
          img.addEventListener("error", updateProgress, { once: true });
        }
      });
    }
  
    // Track fonts (waits for all fonts to be ready)
    document.fonts.ready.then(() => {
      updateProgress();
    });
  
    // Final trigger when everything is visually ready
    const handleFinalRender = () => {
      setProgress(100);
      requestAnimationFrame(() => {
        setTimeout(() => setIsPageLoaded(true), 500);
      });
    };
  
    if (document.readyState === "complete") {
      handleFinalRender();
    } else {
      window.addEventListener("load", handleFinalRender);
    }
  
    return () => {
      window.removeEventListener("load", handleFinalRender);
    };
  }, []);
  
  

  useEffect(() => {
    if (isPageLoaded) {
      preLoaderAnim({
        isPageLoaded,
        refs: {
          preloader: preloaderRef,
          logo: logoRef,
          loadingBar: loadingBarRef,
          loadingFill: loadingFillRef,
          startButton: startButtonRef,
        },
      });
    }
  }, [isPageLoaded]);

  const handleStartClick = () => {
    setStartClicked(true);
    setTimeout(onStart, 800); // Trigger app loading after animation
  };

  return (
    <div ref={preloaderRef} className={`preloader ${startClicked ? "hidden" : ""}`}>
      <div className="preloader-content">
        <img ref={logoRef} src={logo} alt="Logo" className="preloader-logo show" />
        {!isPageLoaded ? (
          <div ref={loadingBarRef} className="loading-bar">
            <div ref={loadingFillRef} className="loading-fill" style={{ width: `${progress}%` }}></div>
          </div>
        ) : (
          <button ref={startButtonRef} className="start-button" onClick={handleStartClick}>
            START
          </button>
        )}
      </div>
    </div>
  );
};

export default Preloader;
