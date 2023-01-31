import React from "react";
import "../Home.css"
import video from "../images/videob.mp4";
import arrow from "../images/arr.png"
import Navbar from "./Navbar";
import Slider from "./Slider";
const Home = () => {
    return (
        <div className="homepg">
         <video src={video} autoPlay muted loop class="video-bg" />
         <div className="bg-overlay"></div>

         <div className="Navbar">
            <Navbar/>
         </div>

         <div className="home-text">
            <h2>Bye bye, long waits and cold food..!</h2>
            <p>Order now and get it delivered in a flash </p>
            <div className="home-btn">
            Start Exploring 
            <p href="Slider.js"><img src={arrow} className="arrowpic" /></p>
            </div>
        </div>
         </div>

    )
};
  
  export default Home;
  