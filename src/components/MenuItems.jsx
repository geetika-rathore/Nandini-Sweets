import React from 'react';
import card1 from "../images/card1.jpeg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import card8 from "../images/card8.jpg"
import card9 from "../images/card9.jpg"
const MenuItems = () => {
    const sendMessageToWhatsApp = (message) => {
        const phoneNumber = '7742525963'; // Replace with the recipient's phone number
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      };
  return (
    <div className="container mx-auto px-5 py-8 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Menu Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card1} alt="Item 1" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">स्पेशल खुरचन मलाई पेड़ा</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-480/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! स्पेशल खुरचन मलाई पेड़ा के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card2} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">स्पेशल शुद्ध देसी घी का लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-560/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! स्पेशल शुद्ध देसी घी का लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card3} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">पौष्टिक मेवा लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-800/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! पौष्टिक मेवा लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card8} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">स्पेशल बूंदी के लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-280/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! स्पेशल बूंदी के लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card4} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">विशेष नारियल लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-340/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! विशेष नारियल लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card6} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">स्पेशल केसर पिस्ता पेड़ा</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-400/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! स्पेशल केसर पिस्ता पेड़ा के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card9} alt="Item 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">शुद्ध देसी घी शाही बूंदी लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-480/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! शुद्ध देसी घी शाही बूंदी लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card5} alt="Item 3" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">विशेष गोंद के लड्डू</h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">रेट-600/प्रति किलो</p>
              <button className="button-5" onClick={() => sendMessageToWhatsApp('जय श्री राम ! विशेष गोंद के लड्डू के लिए ऑर्डर करें')}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
