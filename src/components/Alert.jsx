import React from 'react';

const Alert = ({ message, phoneNumber }) => {
  return (
    <div className="bg-[#f2c196] text-yellow-800 border border-red-500 fixed top-0 left-0 w-full z-50 px-4 py-2 rounded-md text-center font-semibold  shadow-md">
      {message} <a href={`tel:${phoneNumber}`} className=""> {phoneNumber}</a>
    </div>
  );
};

export default Alert;
