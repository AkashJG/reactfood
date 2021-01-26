import React from "react";
import Common from "./Common";
import image from './images/6.jpg'

const Home = () => {
  return (
    <>
     <Common 
     etc="Let's dig in finger licking food"
    imgsrc={image}
    point='Order Your Love'
    visit='/Service'
    btnname="Order Now"
    />
    </>
  );
};

export default Home;
