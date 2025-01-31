import React from "react";

const ContinentSlide = ({ name, image }) => {
  return (
    <div
      className="w-full h-[400px] flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <button className="bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
        Découvrir
      </button>
    </div>
  );
};

export default ContinentSlide;
