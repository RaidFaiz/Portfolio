import { useState, useEffect, useRef } from "react";
import { preLoaderAnim } from "../animation";
import "./preloader.css";
import logo from "../assets/logo.png";

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
    let loaded = 0;
    const total = images.length;

    const updateProgress = () => {
      loaded++;
      const newProgress = total > 0 ? (loaded / total) * 100 : 100;
      setProgress(newProgress);

      if (loaded === total) {
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => setIsPageLoaded(true), 500);
        }, 300);
      }
    };

    if (total === 0) {
      setProgress(100);
      setTimeout(() => setIsPageLoaded(true), 500);
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
