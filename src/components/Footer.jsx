import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center space-x-4">
          {/* WhatsApp Link */}
          <a href="https://wa.me/+916387270799" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaWhatsapp size={32} />
          </a>
          {/* Call Link */}
          <a href="tel:6387270799" className="text-white">
            <FaPhoneAlt size={32} />
          </a>
          {/* Location Link */}
          <a href="https://maps.app.goo.gl/gtpgHQMPF337qYn28" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaMapMarkerAlt size={32} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
