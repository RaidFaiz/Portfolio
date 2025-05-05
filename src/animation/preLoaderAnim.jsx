import gsap from "gsap";

export const preLoaderAnim = ({ isPageLoaded, refs }) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    // Ensure elements exist before animating
    if (refs.logo.current) {
      tl.to(refs.logo.current, {
        duration: 1.5,
        opacity: 1,
        ease: "power3.out",
      });
    }

    if (!isPageLoaded && refs.loadingFill.current) {
      tl.to(refs.loadingFill.current, {
        duration: 2,
        width: "100%",
        ease: "power3.inOut",
      });
    }

    if (isPageLoaded) {
      if (refs.loadingBar.current) {
        tl.to(refs.loadingBar.current, {
          duration: 0.5,
          opacity: 0,
          y: -10,
          ease: "power3.out",
        }).set(refs.loadingBar.current, { display: "none" });
      }

      if (refs.startButton.current) {
        tl.fromTo(
          refs.startButton.current,
          { opacity: 0, scale: 0.8 },
          {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
          }, "-=1.5"
        );
      }
    }
  }, refs.preloader.current);

  return () => ctx.revert(); // ✅ Returns a cleanup function to fix the error
};
