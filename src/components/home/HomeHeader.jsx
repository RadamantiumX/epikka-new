import React,{useState,useEffect, useRef} from "react";
import { Carousel } from "react-bootstrap";

export default function HomeHeader() {
    return(
       <>
          <Carousel fade>
  <Carousel.Item>
    <div className="d-block header1" alt="First slide">
      <div className="carousel-text">
        <h1>First slide label</h1>
   
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="d-block header2" alt="Second slide">
      <div className="carousel-text">
        <h1>Second slide label</h1>
    
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="d-block header3" alt="Third slide">
      <div className="carousel-text">
        <h1>Third slide label</h1>
      
      </div>
    </div>
  </Carousel.Item>
</Carousel>

    </>
       
    )
}