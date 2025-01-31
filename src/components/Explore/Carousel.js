import React, { useState, useEffect } from "react";
import ContinentSlide from "./ContinentSlide";

const continents = [
  { name: "Asie", image: "/images/asia.jpg" },
  { name: "Europe", image: "/images/europe.jpg" },
  { name: "Afrique", image: "/images/africa.jpg" },
  { name: "Amérique", image: "/images/america.jpg" },
  { name: "Océanie", image: "/images/oceania.jpg" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === continents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change de slide toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {continents.map((continent, index) => (
        <div
          key={continent.name}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <ContinentSlide name={continent.name} image={continent.image} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
