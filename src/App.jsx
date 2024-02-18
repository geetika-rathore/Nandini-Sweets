import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <div className="">
       {showAlert && <Alert message="For Bulk Orders or Custom Orders contact us on : +91"  phoneNumber="6387270799" />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Footer />} />
      </Routes>
      <div id="whatsapp-icon" class="fixed bottom-4 md:bottom-8  lg:bottom-16 right-4 md:right-8 lg:right-16 z-50">
  <a href="https://wa.me/6387270799" target="_blank" rel="noopener noreferrer" class="bg-green-500 text-white p-4 rounded-full">
    <i class="fab fa-whatsapp text-xl md:text-2xl lg:text-3xl"></i>
  </a>
</div>
    </div>
  );
}

export default App;