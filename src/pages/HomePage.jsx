import React from "react";
import ComoLoHacemos from "../components/home/ComoLoHacemos";
import QueHacemos from "../components/home/QueHacemos";
import ContactUs from "../components/home/ContactUs";
import Slogan from "../components/home/Slogan";
import HomeHeader from "../components/home/HomeHeader";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <QueHacemos />
      <ComoLoHacemos />
      <Slogan />
      <ContactUs />


      <div className="float-sm">
        <div className="fl-fl float-fb">
          <i className="fa fa-facebook icn"></i>
          <a href="" target="_blank"> Seguinos!</a>
        </div>
        <div className="fl-fl float-tw">
          <i className="fa fa-instagram icn tw"></i>
          <a href="" target="_blank">Seguinos!</a>
        </div>
        <div className="fl-fl float-gp">
          <i className="fa fa-whatsapp icn"></i>
          <a href="" target="_blank">Contactanos</a>
        </div>
       
      
      </div>
      <ScrollLink
        to="section1"
        smooth={true}
        duration={500}
        className="scroll-link"
      ></ScrollLink>

<button onClick={() => scroll.scrollToTop()} className="back-to-top-button d-none d-md-block">
  <svg class="arrows" viewBox="0 0 60 72">
    <path class="a1" d="M0 40 L30 8 L60 40"></path>

    <path class="a3" d="M0 0 L30 -32 L60 0"></path>
  </svg>
</button>
    </>
  );
}


