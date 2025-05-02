import React from 'react';

const NewsparkBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 p-4 md:p-6 bg-gray-50 text-gray-900 rounded-lg shadow-lg">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/9mxRkrr/pexels-pixabay-262508.jpg"
          alt="Logo"
          className="w-12 h-12 mr-3 rounded-full object-cover"
        />
        <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800">
          InfoNest 
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-center text-gray-700 font-serif max-w-xs md:max-w-none">
        Nest responsive newspaper and magazine WordPress theme.
      </p>

      {/* ADS Label */}
      <span className="text-xs uppercase font-semibold text-red-600 text-center mt-2 md:mt-0">
        ADS 670X85PX AREA!
      </span>
    </div>
  );
};

export default NewsparkBanner;
