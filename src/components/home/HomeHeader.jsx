import React,{useState,useEffect, useRef} from "react";
import { Carousel } from "react-bootstrap";

export default function HomeHeader() {
    return(
       <>
            <Carousel fade>
                <Carousel.Item>
                    <div
                        className="d-block header1"
                       
                        alt="First slide"
                    ></div>
                    <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <div
                        className="d-block header2"
                        
                        alt="First slide"
                    ></div>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <div
                        className="d-block header3"
                        
                        alt="First slide"
                    ></div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>        
    </>
       
    )
}