"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const images = ["assets/cover1.jpg", "assets/cover2.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 bg-cover">
      <div
        className="relative w-full h-screen bg-center bg-cover bgimg"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 bgimgover">
          <div className="wrapper">
            <div className="relative z-10 inside-container">
              <div className="relative z-10 text-part">
                <h2 className="font-bold text-center text-7xl interr text-amber-400">
                  THE SUMMER SHOW
                </h2>
                <div className="text-center">
                  <h3 className="mt-4 font-semibold text-white ">PRESENT</h3>
                  {/* <h3 className="mt-4 font-semibold text-white ">présente</h3> */}
                  <a
                    href="#c-section"
                    className="block mx-auto mt-5 btn btvoterf btnN"
                  >
                    <span className="text-2xl font-bold text-white">
                      The Last Dance.
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-0 flex items-center justify-center w-full h-full dots">
                <img src="assets/svg/dots.svg" className="dots-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
