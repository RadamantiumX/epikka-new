import React, { useEffect, useState } from "react";
import ComoLoHacemos from "../components/home/ComoLoHacemos";
import QueHacemos from "../components/home/QueHacemos";
import ContactUs from "../components/home/ContactUs";
import Slogan from "../components/home/Slogan";
import HomeHeader from "../components/home/HomeHeader";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import axiosClient from "../axios-client";



export default function HomePage() {
  const [url, setUrl] = useState(
    {url:'Home'}
     );
 const [load, setLoad] = useState(true)    

 useEffect(()=>{
     if(load){
      axiosClient.post('/data',url)
      .then(()=>{
        setLoad(false);
      })   
     }
     
 },[])
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
          <a href="https://www.facebook.com/profile.php?id=100090325090524&mibextid=ZbWKwL" target="_blank"> Seguinos!</a>
        </div>
        <div className="fl-fl float-tw">
          <i className="fa fa-instagram icn tw"></i>
          <a href="https://www.instagram.com/epikka.agencia/" target="_blank">Seguinos!</a>
        </div>
        <div className="fl-fl float-gp">
  <i className="fa fa-whatsapp icn"></i>
  <a href="https://wa.me/541165516622?text=¡Hola! Estoy interesado/a en conocer más sobre tus servicios. ¿Podrías brindarme más información?" target="_blank">Contactanos!</a>
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


