import React from "react";
import Common from "./Common";
import image from './images/8.png'

const About = () => {
  return (
    <>
    <Common 
    name='To set yourself up for success, try to keep things simple. Instead of being overly concerned with counting calories, color, variety, and freshness. Focus on avoiding packaged and processed foods and opting for more fresh ingredients whenever possible.'
    imgsrc={image}
    point='About'
    visit='/contact'
    btnname="Contact US"
    />
    </>
  );
};

export default About;
