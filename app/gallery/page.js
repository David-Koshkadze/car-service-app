"use client"
import React, { useState } from "react";

export default function Page() {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleBackClick = () => {
    setActiveImage(null);
  };

  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[85rem] mx-auto py-12 ${
          activeImage !== null ? "hidden" : ""
        }`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <div key={index} className="grid gap-4">
            <div
              className="rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={`/images/img${index}.jpg`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {activeImage !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500">
          <div className="relative max-w-screen-md">
            <img
              className="h-auto md:h-[700px] max-w-full rounded-lg"
              src={`/images/img${activeImage}.jpg`}
              alt=""
            />
            <button
              className="absolute top-4 left-4 text-white border-2 px-4 py-2 rounded-lg text-2xl"
              onClick={handleBackClick}
            >
              &#x2716;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
