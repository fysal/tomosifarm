import React, { useEffect } from "react";
import Carousel from "nuka-carousel";
import Slider1 from "../assets/slides/tomosi-farm.jpg";
import Slider2 from "../assets/slides/tomosi-cows.jpg";
import Slider3 from "../assets/slides/crater-lake.jpg";
import Slider4 from "../assets/slides/farm-aerial.jpg";
import { useMediaQuery } from 'react-responsive';
import clsx from "clsx";
const MainSlider = () => {
  const slides = [
    { slide: Slider1, text: "Commited to adopting technology and innovation" },
    { slide: Slider2, text: "We are passionate, forward-thinking farmers" },
    { slide: Slider3, text: "We encourage continuous learning" },
    { slide: Slider4, text: "We are passionate, forward-thinking farmers" },
  ];

  const isMobile = useMediaQuery({ query: "(max-width:800px)" });

  useEffect(() => {
    let nextBtn = document.querySelector('[aria-label="next"]');
    let prevBtn = document.querySelector('[aria-label="previous"]');
    nextBtn.innerHTML = '<span class="material-icons-outlined">east</span>';
    prevBtn.innerHTML = '<span class="material-icons-outlined">west</span>';
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    var w = document.querySelector(".slider-container").offsetHeight;
    console.log(w);
  });

  return (
    <Carousel
      wrapAround={true}
      autoplay={true}
      withoutControls={false}
      animation="slide"
      speed={1200}
    >
      {slides.map((item, index) => (
        <div className="main-slider" key={index}>
          <div
            className={clsx(isMobile ? "slider_small" : "slider","sider-1 d-flex align-items-start justify-content-center flex-column position-relative")}
            style={{
              background: `url(${item.slide}) no-repeat scroll center / cover`,
            }}
          >
            <div className="ovl"></div>
            <div className="container position-relative">
              <div className={clsx(isMobile ? "btex_small" : "btex")}>
               {item.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MainSlider;
