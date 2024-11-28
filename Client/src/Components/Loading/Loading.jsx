import React, { useEffect } from "react";
import "./Loading.css";

function Loading({ onAnimationEnd }) {
  useEffect(() => {
    // Set a timeout to hide the animation after 4 seconds
    const timer = setTimeout(() => {
      onAnimationEnd(); // Call the function to end loading and show the app
    }, 3000); // Adjust the duration to match your animation length

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="animation-container">
      <div className="circle-container">
        <div className="moving-circle circle1"></div>
        <div className="moving-circle circle2"></div>
        <div className="moving-circle circle3"></div>
      </div>
      <h1 className="text-display">Coachdost</h1>
    </div>
  );
}

export default Loading;
