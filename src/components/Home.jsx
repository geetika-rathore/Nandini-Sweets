import React from 'react'
import ImageSlider from './ImageSlider'
import Contact from './Contact'
import  Welcome  from './Welcome'
import  Menu  from './Menu'
import  Footer  from './Footer'
import slider from "../slider.png"
const Home = () => {
  return (
    <div>
        <ImageSlider/>
        <div id="whatsapp-icon" class="fixed bottom-4 md:bottom-8  lg:bottom-16 right-4 md:right-8 lg:right-16 z-50">
  <a href="https://wa.me/6387270799" target="_blank" rel="noopener noreferrer" class="bg-green-500 text-white p-4 rounded-full">
    <i class="fab fa-whatsapp text-xl md:text-2xl lg:text-3xl"></i>
  </a>
</div>


    <Welcome
  imageUrl={slider}
  heading="Welcome to Nandini Sweets "
  paragraph="Laddu is one of India's most loved and well-known sweets. Made with gram flour, sugar, and spices, this delicious treat provides a mouth-watering taste that can't be beaten."
  buttonText="Read More"
/>
<Menu/>
<Contact/>
<Footer/>
    </div>
  )
}
 export default Home;