import React from "react";

function Cards({ image, title, paragraph }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-2/3 xl:w-3/4 mb-4 px-2">
      <div className="bg-white rounded-lg overflow-hidden">
        <img src={image} className="w-30 h-30 mt-4 pb-3" alt="Product" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{paragraph}</p>
          <div className="flex items-center justify-between mt-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
