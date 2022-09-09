import React from 'react'
import Slider1 from '../assets/slides/tomosi-farm.jpg'
const MainSlider = () => {
  return (
    <div className="main-slider">
      <div
        className="slider sider-1 d-flex align-items-start justify-content-center flex-column position-relative"
        style={{
          background: `url(${Slider1}) no-repeat scroll center / cover`,
        }}
      >
        <div className="ovl"></div>
        <div className="container position-relative">
          <div className="btex">Increase the incomes of our nations</div>
        </div>
      </div>
    </div>
  );
}

export default MainSlider