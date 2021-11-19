import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/values-2.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name='Welcome to About Page'
        imgsrc={web}
        visit='/contact'
        btname='Contact Now'
      />
    </>
  );
};

export default About;
