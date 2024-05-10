import React from "react";


// import Spinner from "./home/Spinner"
import Carousel from "./home/Carousel"
import Feature from "./home/Feature"
import About from "./home/About"
import Services from "./home/Services"
import Feature2 from "./home/Feature2"
import Projects from "./home/Projects"
import Quote from "./home/Quote"
import Team from "./home/Team"
import Testimonial from "./home/Testimonial"


function Home() {
  return (
    <div className="overflow-hidden">
        {/* <Spinner/> */}
        <Carousel/>
        <Feature/>
        <About/>
        <Services/>
        <Feature2/>
        <Projects/>
        <Quote/>
        <Team/>
        <Testimonial/>
    </div>
  );
}

export default Home;
