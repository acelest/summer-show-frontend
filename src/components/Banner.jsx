"use client"; // Add this line at the top of the file

import { useEffect, useState } from "react";

export default function Banner() {
  const images = [
    "assets/cover1.jpg",
    "assets/cover2.jpg",
    // Ajoutez les chemins des autres images de fond ici
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changez l'image toutes les 5 secondes (5000 millisecondes)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cover bg-gray-100 mt-4">
      <div
        className="bgimg relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="bgimgover absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="wrapper">
            <div className="inside-container relative z-10">
              <div className="text-part relative z-10">
                <h2 className="text-7xl font-bold text-center interr text-amber-400">
                  THE SUMMER SHOW
                </h2>
                <div className="text-center">
                  <h3 className="text-white font-semibold mt-4 ">présente</h3>
                  <a
                    href="#c-section"
                    className="btn btvoterf btnN mx-auto block mt-5"
                  >
                    <span className="text-2xl  text-white font-bold">
                      The Last Dance
                    </span>
                  </a>
                </div>
              </div>
              <div className="dots absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
                <img src="assets/svg/dots.svg" className="dots-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
