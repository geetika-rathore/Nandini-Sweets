import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./ImageSlider.css";
const ImageSlider = () => {
  return (
    <div className="carousel-container">
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        mouseTracking
        dotsDisabled={true}
        buttonsDisabled={true}
        responsive={{
          0: { items: 1 },
          600: { items: 1 },
          1024: { items: 1 },
          1280: { items: 1 },
        }}
      >
        <div className="item">
          {/* <div className="flex">
            <div className="w-1/2 p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">Heading 1</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </div>
          </div> */}
        </div>
        <div className="item">
          {/* <div className="flex">
            <div className="w-1/2 p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">Heading 2</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </div>
          </div> */}
        </div>
        <div className="item">
          {/* <div className="flex">
            <div className="w-1/2 p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">Heading 3</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </div>
          </div> */}
        </div>
      </AliceCarousel>
    </div>
  );
};
export default ImageSlider;
