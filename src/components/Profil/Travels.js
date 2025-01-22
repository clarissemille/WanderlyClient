import React from "react";

const Travels = () => {
  const photos = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    src: `https://via.placeholder.com/150?text=Photo+${index + 1}`,
  }));

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src}
          alt={`Photo ${photo.id}`}
          className="w-full h-32 object-cover rounded-md"
        />
      ))}
    </div>
  );
};

export default Travels;
