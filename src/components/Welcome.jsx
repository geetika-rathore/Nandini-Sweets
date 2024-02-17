import React from 'react';

const Welcome = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:flex items-center justify-center">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img src={imageUrl} alt="Welcome" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:ml-4 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-4">{paragraph}</p>
        <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
