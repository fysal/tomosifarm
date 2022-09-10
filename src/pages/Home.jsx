import React from 'react';
import Aboutus from '../components/Aboutus';
import Contactus from '../components/Contactus';
import MainSlider from '../components/MainSlider';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
  return (
    <>
    <MainSlider />
    <Aboutus />
    <WhatWeDo />
    <Contactus />
    </>
  )
}

export default Home