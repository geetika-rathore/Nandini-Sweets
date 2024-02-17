import React from 'react';
import { Link } from "react-router-dom";
import card6 from "../images/card6.jpeg";
import card2 from "../images/card2.jpg";
import card8 from "../images/card8.jpg";

const sendMessageToWhatsApp = (message) => {
  const phoneNumber = '6387270799'; 
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

const Menu = () => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product 1 */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <img src={card6} alt="Product 1" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">स्पेशल खुरचन मलाई पेड़ा</h3>
            <p className="text-gray-700 mb-4 text-center font-semibold">रेट- 480/प्रतिकिलो</p>
            <div className="flex justify-center space-x-4">
              <button className="btn" onClick={() => sendMessageToWhatsApp('जय श्री राम ! स्पेशल खुरचन मलाई पेड़ा के लिए ऑर्डर करें')}>Buy</button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <img src={card2} alt="Product 2" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">स्पेशल शुद्ध देसी घी का लड्डू</h3>
            <p className="text-gray-700 mb-4 text-center font-semibold">रेट- 560/प्रतिकिलो</p>
            <div className="flex justify-center space-x-4">
              <button className="btn" onClick={() => sendMessageToWhatsApp('जय श्री राम !स्पेशल शुद्ध देसी घी का लड्डू के लिए ऑर्डर करें')}>Buy</button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <img src={card8} alt="Product 3" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">स्पेशल बूंदी के लड्डू</h3>
            <p className="text-gray-700 mb-4 text-center font-semibold ">रेट- 340/प्रतिकिलो</p>
            <div className="flex justify-center space-x-4">
              <button className="btn" onClick={() => sendMessageToWhatsApp('जय श्री राम !स्पेशल बूंदी के लड्डू के लिए ऑर्डर करें')}>Buy</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/menu" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition duration-300">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
